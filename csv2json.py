# ../json/ammo.csvを読み込み連想配列に変換する
import csv
import json

with open("./src/json/ammo.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    lines = []
    for line in reader:
        lines.append(
            {
                line[1]: {
                    "img": line[0],
                    "damage": line[2],
                    "penetrate": line[3],
                    "aDamage": line[4],
                    "accuracy": line[5],
                    "reaction": line[6],
                    "crushing": line[7],
                    "velocity": line[11],
                    "dealer": line[13],
                    "remarks": line[14],
                }
            }
        )
with open("./sample.json", "w", encoding="utf-8") as f:
    json.dump(lines, f, indent=4)
