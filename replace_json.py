import json


def replace_name():
    file_name = "src/json/task_with_id.json"

    with open(file_name, encoding="utf-8") as f:
        data_lines = f.read()

    with open("replace.txt", encoding="utf-8") as f:
        replace_lines = f.read().split("\n")

    for num in range(0, len(replace_lines), 2):
        # 文字列置換
        data_lines = data_lines.replace(
            replace_lines[num], replace_lines[num + 1]
        )

    # 同じファイル名で保存
    with open(file_name, mode="w", encoding="utf-8") as f:
        f.write(data_lines)


replace_name()
