import json

# 開くファイルの名前と、新しいファイルに書き込むファイル名を指定
input_file_name = "src/json/task.json"
output_file_name = "src/json/task_with_id.json"

# 入力ファイルを開く
with open(input_file_name, "r") as input_file:
    # 入力ファイルのJSONデータを読み込む
    data = json.load(input_file)

    # IDを割り当てるためのカウンターを初期化
    id_counter = 0

    # 各キーと値にIDを割り当てる
    for key in data:
        for a in data[key]:
            print(a)
            data[key][a]["id"] = id_counter
            id_counter += 1
            # if "items" in data[key]:
            #     for item_key in data[key]["items"]:
            #         data[key]["items"][item_key]["id"] = id_counter
            #         id_counter += 1

    # 新しいファイルにJSONデータを書き込む
    with open(output_file_name, "w") as output_file:
        json.dump(data, output_file, indent=4)
