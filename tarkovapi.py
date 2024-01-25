import requests, json, pprint
def run_query(query):
    headers = {"Content-Type": "application/json"}
    response = requests.post('https://api.tarkov.dev/graphql', headers=headers, json={'query': query})
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception("Query failed to run by returning code of {}. {}".format(response.status_code, query))
    
new_query = """
{
	ammo(
    lang: en
  ){
    item{
      name
    }
		damage
    penetrationPower
    armorDamage
    accuracyModifier
    recoilModifier
    fragmentationChance
    initialSpeed
  }
}
"""

result = run_query(new_query)
# resultをjsonとして保存
# with open('ammo.json', 'w') as f:
#     json.dump(result, f, indent=4)
# ammo.jsonを読み込み
# with open('ammo.json', 'r') as f:
#     result = json.load(f)
ammo = result["data"]["ammo"]
# for data in ammo:
#     print(data["item"]["name"])
#     print(data["damage"])
#     print(data["penetrationPower"])
#     print(data["armorDamage"])
#     print(data["accuracyModifier"])
#     print(data["recoilModifier"])
#     print(data["fragmentationChance"])
#     print(data["initialSpeed"])
#     print("")
result = {}
for data in ammo:
    # 辞書型を作成, キーはnameにする
    ammo_dict = {data["item"]["name"]: 
                {
                    "damage": int(data["damage"]),
                    "penetrationPower": int(data["penetrationPower"]),
                    "armorDamage": int(data["armorDamage"]),
                    "accuracyModifier": round(float(data["accuracyModifier"])*100),
                    "recoilModifier": round(float(data["recoilModifier"])*100),
                    "fragmentationChance": round(float(data["fragmentationChance"])*100),
                    "initialSpeed": int(data["initialSpeed"])
                }
            }
    result.update(ammo_dict)

# jsonとして保存
with open('ammo_dict.json', 'w') as f:
    json.dump(result, f, indent=4)