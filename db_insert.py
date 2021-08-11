from openpyxl import load_workbook
import db_conn
import pymysql

file = load_workbook("./db.xlsx", data_only=True)
sheet = file['Sheet1']
data = sheet['A2':'C100']
conn = db_conn.connect_db()
cursor = conn.cursor()

all_values = []
for row in data:
    if row[0].value:
        p1 = row[0].value
        p2 = row[1].value
        p3 = row[2].value
        sql = "INSERT INTO recipe (name, ingredients, steps) VALUES (%s, %s, %s)"
        cursor.execute(sql,(p1,p2,p3))
        conn.commit()
conn.close()