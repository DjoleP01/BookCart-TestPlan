from locust import HttpUser, task, between

class MyLocust(HttpUser):
    wait_time = between(1, 3)

    @task
    def login(self):
        login_url = "/api/login"
        
        username = "DjoleP"
        password = "Djordje123"
        
        payload = {
            "userId": 0,
  "firstName": "string",
  "lastName": "string",
  "username": username,
  "password": password,
  "gender": "string",
  "userTypeId": 0
        }

        headers = {
            "Content-Type": "application/json"
        }

        response = self.client.post(login_url, json=payload, headers=headers)


        if response.status_code == 200:
            print(f"Login successful for user: {username}")
        else:
            print(f"Login failed for user: {username}. Status code: {response.status_code}, Response content: {response.text}")
