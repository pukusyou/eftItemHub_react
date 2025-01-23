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
      iconLink
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

ammo = result["data"]["ammo"]

result = {}
for data in ammo:
    # 辞書型を作成, キーはnameにする
    ammo_dict = {data["item"]["name"]: 
                {
                    "iconLink": data["item"]["iconLink"],
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
with open('/home/kitagawa/asobiba/itemHub/eftItemHub_react/public/json/ammo_dict2.json', 'w') as f:
    json.dump(result, f, indent=4)