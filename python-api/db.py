from datetime import datetime

import pandas as pd
import sqlalchemy
from sqlalchemy import Column, DateTime, ForeignKey, Integer, Text, and_, create_engine, or_
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

PG_USER = os.environ['PG_USER']
PG_PASSWORD = os.environ['PG_USER']
PG_HOST = os.environ['PG_HOST']
PG_PORT = os.environ['PG_PORT']

DATABASE_URL = f"postgres://{PG_USER}:{PG_PASSWORD}@{PG_HOST}:{PG_PORT}"
