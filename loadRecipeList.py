import db_conn
import pymysql
import json

def loadRecipeList():
    conn = db_conn.connect_db()
    cursor = conn.cursor()
    sql = "SELECT * FROM recipe"

    cursor.execute(sql)
    data = cursor.fetchall()

    l = []
    for row in data:
        l.append({"name": row[1], "ingredients": row[2], "steps": row[3]})

    return json.dumps(l,ensure_ascii=False)