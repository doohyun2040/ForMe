import config
import pymysql

def connect_db():
    conn = pymysql.connect(
        user=config.DB_CONFIG['user'], 
        passwd=config.DB_CONFIG['passwd'], 
        host=config.DB_CONFIG['host'], 
        db=config.DB_CONFIG['db'], 
        charset=config.DB_CONFIG['charset']
    )

    return conn