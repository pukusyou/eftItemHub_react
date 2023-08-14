import pprint
import re
import time
import json
import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent

ua = UserAgent()
header = {'User-Agent': str(ua.chrome)}

def get_task_list(trader: str)-> list:
    """タスク一覧を取得する
    
    Args:
        trader (str): トレーダー名

    Returns:
        list: タスク一覧

    Examples:
        >>> get_task_list("Prapor")
    """
    url = "https://wikiwiki.jp/eft/" + trader
    r = requests.get(url, headers=header)
    soup = BeautifulSoup(r.content, "html.parser")
    ul = soup.find('div', id='content').find_all('ul') # type: ignore
    lis = ul[0].find_all('a')
    task_list = []
    for li in lis:
        # liのtextに"イベント"という文字列が含まれている場合はスキップする
        if li.text.find('Important Patient') != -1:
            continue
        # tasknameとurlのdictを作成
        if 'href' in li.attrs:
            task = {
                'task_name': li.text,
                'url': 'https://wikiwiki.jp'+li['href']
            }
            task_list.append(task)
    return task_list

def has_element_with_text(html, tag_name, text):
    """指定したタグ名とテキストを持つ要素が存在するかどうかを判定する

    Args:
        html (str): html
        tag_name (str): タグ名
        text (str): テキスト

    Returns:
        bool: 指定したタグ名とテキストを持つ要素が存在するかどうか
    """
    soup = BeautifulSoup(html, 'html.parser')
    element = soup.find_all(tag_name)
    for i in element:
        if i.text.find(text)!= -1:
            return True
    return False

def get_task_info(url: str):
    """タスク情報を取得する

    Args:
        url (str): タスクURL

    Returns:
        list: タスク情報
    """
    # 支給アイテムがあるとき取得できていない
    pattern = r"eft/(.*)"
    result = re.search(pattern, url)
    if result:
        extracted_text = result.group(1)
        task_name = extracted_text.split('/')[1]
        task_name = task_name.replace('%20', ' ')
        print(task_name)
        trader_name = extracted_text.split('/')[0]
    r = requests.get(url, headers=header)
    soup = BeautifulSoup(r.content, "html.parser")
    res = has_element_with_text(r.content, 'h3', '必要なアイテム')
    if res:
        res_table = None
        tables = soup.find_all('table')
        for table in tables:
            # print(table.find('th').text)
            if(table.find('th')!= None and table.find('th').text == 'アイコン'):
                res_table = table
                break
        items = []
        rows = res_table.find_all('tr')[1:] # 最初の行をスキップして残りの行を取得
        for row in rows:
            columns = row.find_all('td')
            # 要素が存在しない場合はスキップする
            if len(columns) < 6:
                continue

            icon_url = columns[0].find('img')['src']
            # webp以降の文字列を削除
            icon_url = icon_url.split('?')[0]
            item_name = columns[1].text.strip()
            quantity = columns[2].text.strip()
            # quantityに","が含まれている場合は削除する
            if quantity.find(',') != -1:
                quantity = quantity.replace(',', '')
            requirement = columns[3].text.strip()
            fir_mark = columns[4].text.strip()
            if fir_mark == '不必要' or fir_mark == '不要':
                fir_mark = False
            else:
                fir_mark = True
            note = columns[5].text.strip()
            if quantity != '-':
                item = {
                    'task_name': task_name,
                    'trader_name': trader_name,
                    'wiki_url': url,
                    'icon_url': icon_url,
                    'item_name': item_name,
                    'quantity': quantity,
                    'requirement': requirement,
                    'inRaid': fir_mark,
                    'note': note
                }
                items.append(item)
        # pprint.pprint(items)
        return items
    else:
        item = {
                'task_name': task_name,
                'trader_name': trader_name,
                'wiki_url': url,
            }
        print('No items')
        return [item]

def compare_json(new_task_list: list, trader: str):
    new_tasks = []
    FILE_PATH = 'eftItemHub_react/src/json/task_with_id.json'
    with open(FILE_PATH, 'r') as f:
        task_json = json.load(f)
        # new_task_listのキーがtask_json[trader]に存在するかどうかを判定する
        for key in new_task_list:
            # キーが存在しない場合は新規追加する
            if key not in task_json[trader]:
                new_tasks.append(key)
    return new_tasks

    
# def remake_task_json(task_list: dict, trader: str):
#     # jsonを読み込む
#     with open('eftItemHub_react/src/json/task_with_id.json', 'r') as f:
#         task_json = json.load(f)
#         with open('test.json', 'r') as f:
#             new_task_json = json.load(f)
#             for key in new_task_json[trader]:
#                 # 取得したタスクが既にjsonに存在する
#                 if(key in task_json):
#                     # そのタスクにアイテムが存在する
#                     if("items" in task_json[trader][key]):
#                         for item in new_task_json[trader][key]["items"]:
#                             # そのアイテムが既にjsonに存在する
#                             if(item["name"] in task_json[trader][key]["items"]):
#                                 task_json[trader][key]["items"][item["name"]]["num"] += item["num"]
#                             else:
#                                 task_json[trader][key]["items"][item["name"]] = item

def make_json(trader: str, task_list: list):
    """jsonを作成する

    Args:
        task_list (list): タスク一覧
    """
    task_json = {}
    task_json[trader] = {}
    for task in task_list:
        if not task:  # check if task list is empty
            continue
        task_json[(task[0])['trader_name']][(task[0])['task_name']] = {}
        task_json[(task[0])['trader_name']][(task[0])['task_name']]["wiki_url"] = (task[0])['wiki_url']
        items = {}  
        for index, item in enumerate(task):
            if('item_name' in item and item['note'] != 'タスク専用アイテム'):
                try:
                    items['item'+str(index+1)] = {"full_name": item['item_name'], "name": item['item_name'], "num": int(item['quantity']), "inRaid": item['inRaid'], "img":item['icon_url'],"category": "loot"}
                except:
                    print("---error---")
                    print((task[0])['task_name'])
                    exit()
                print(items)
                task_json[item['trader_name']][item['task_name']]['items'] = items
        task_json[(task[0])['trader_name']][(task[0])['task_name']]["id"] = 0
    with open("new_task/new_" + trader + "_task.json", "w") as file:
        json.dump(task_json, file, indent=4)
    
def main(trader_name: str):
    """メイン処理

    Args:
        trader_name (str): トレーダー名
    """
    task_list = get_task_list(trader_name)
    task_list_details = []
    # task_listのタスク名のみのリストを作成
    task_name_list = []
    for task in task_list:
        task_name_list.append(task['task_name'])
    new_task = compare_json(task_name_list, trader_name)
    send_return_value_to_discord_webhook('https://discord.com/api/webhooks/1080748668472266822/qIHTP2o0VzGU0rJO_wEAzCIG3iZziX4sC2SNKEpgQ9V1xO62CbKjKE73V2YwrhP3_tYr', new_task, trader_name)
    for index, task in enumerate(task_list):
        print(task['task_name'])
        task_list_details.append(get_task_info(task['url']))
        print(str(int((index+1)/len(task_list)*100)) + '% 完了')
        print('-----------------')
        time.sleep(5)
    
    make_json(trader_name, task_list_details)

def send_webhook(url: str, data: dict):
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.post(url, headers=headers, data=json.dumps(data))
    return response

def send_return_value_to_discord_webhook(url: str, return_value: any, trader_name: str):
    value = ""
    for task in return_value:
        print(task)
        value += "```" + task + "```\n"
    data = {
        "embeds": [
            {
                "title": trader_name,
                "description": f"{value}",
                "color": 0x00FF00
            }
        ]
    }
    send_webhook(url, data)

def info_test():
    """タスク情報取得テスト
    """
    task_list_details = []
    url2 = 'https://wikiwiki.jp/eft/Prapor/Search%20Mission'
    task_list_details.append(get_task_info(url2))
    pprint.pprint(task_list_details)
    make_json('Prapor', task_list_details)

TRADERS = ['Prapor', 'Therapist', 'Skier', 'Peacekeeper', 'Mechanic', 'Ragman', 'Jaeger']
for trader in TRADERS:
    main(trader)
# main(TRADERS[0])
# info_test()
# remake_task_json('Prapor','Prapor')
# pprint.pprint(get_task_list(TRADERS[0]))