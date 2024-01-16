from locust import HttpUser, task, between

class MyLocust(HttpUser):
    wait_time = between(1, 3)

    @task
    def register_user(self):
        register_url = "/api/user"

        user_payload = {
            "userId": 0,
            "firstName": "Marko",
            "lastName": "Markovic",
            "username": "Mare",
            "password": "Marko123",
            "gender": "string",
            "userTypeId": 0
        }

        headers = {
            "Content-Type": "application/json"
        }

        response = self.client.post(register_url, json=user_payload, headers=headers)

        if response.status_code == 200:
            print(f"registration successful: {user_payload}")
        else:
            print(f"registration failed. Status code: {response.status_code}, Response content: {response.text}")
