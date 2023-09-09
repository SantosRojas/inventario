import pandas as pd
import json

# Lee el archivo Excel
df = pd.read_excel('src\converter\Libro5.xlsx', engine='openpyxl',sheet_name="Representante")

# Convierte los datos en un formato adecuado para JSON
options = df.to_dict(orient='records')

# Modifica la estructura de cada opciÃ³n
formatted_options = [{'label': row['nombre'], 'value': row['codigo']} for row in options]

# Guarda las opciones en un archivo JSON
with open('codigoReprecentante.json', 'w',encoding='utf-8') as json_file:
    json.dump(formatted_options, json_file, indent=4,ensure_ascii=False)

print('Archivo JSON generado exitosamente.')