# json読み込み
import json
import requests, time
with open('/home/kitagawa/itemHub/eftItemHub_react/public/json/ammo_dict.json', 'r') as f:
    ammo_dict = json.load(f)
    for key, value in ammo_dict.items():
        # valueのlinkから画像をダウンロード
        url = value["iconLink"]
        filename = url.split('/')[-1]
        # 画像を保存
        with open('/home/kitagawa/itemHub/eftItemHub_react/public/img/ammo/' + filename, 'wb') as f:
            img = requests.get(url)
            f.write(img.content)
        time.sleep(5)