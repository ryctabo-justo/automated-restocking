CREATE OR REPLACE FUNCTION capture_user_changes(data JSONB) RETURNS VOID AS $$
import requests

url = 'https://api.example.com/endpoint'
headers = {'Content-Type': 'application/json'}
response = requests.post(url, json=data, headers=headers)

if response.status_code != 200:
    raise Exception(f'HTTP Request failed with status code {response.status_code}')

return
$$ LANGUAGE plpython3u;

-- Crear un trigger para llamar a la función send_http_request
CREATE TRIGGER http_request_trigger
AFTER INSERT OR UPDATE OR DELETE ON "UserEntities"
FOR EACH ROW
EXECUTE FUNCTION capture_user_changes(ROW_TO_JSON(NEW));
