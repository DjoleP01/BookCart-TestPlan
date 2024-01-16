from locust import HttpUser, task, between

class MyLocust(HttpUser):
    wait_time = between(1, 3)
    auth_token = None
    @task
    def on_start(self):
        
        self.login()
    @task
    def login(self):
        login_url = "/api/login" 

        username = "DjoleP"
        password = "Djordje123"

        payload = {
            "username": username,
            "password": password
        }

        headers = {
            "Content-Type": "application/json"
        }
        
        response = self.client.post(login_url, json=payload, headers=headers)
        self.auth_token = response.json().get("token")
        

    @task
    def create_book(self):
        book_creation_url = "/api/book"

        book_payload = {
            "bookId": 2,
            "title": "HP2",
            "author": "JKR",
            "category": "Mystery",
            "price": 235,
            "coverFileName": "string"
        }

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.auth_token}"
        }

        print(f"token : {headers}")
        response = self.client.get(book_creation_url, json=book_payload, headers=headers)

        if response.status_code == 200:
            print(f"Ordered books {response.text}")
        else:
            print(f"Book fetch failed. Status code: {response.status_code}, Response content: {response.text}")