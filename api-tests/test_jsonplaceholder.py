import requests

def main():
    url = "https://jsonplaceholder.typicode.com/posts/1"
    try:
        response = requests.get(url)
    except Exception as e:
        print(f"Falha ao conectar ao endpoint: {e}")
        return

    results = []

    # Verificação do status
    status_ok = response.status_code == 200
    results.append(("Status code == 200", status_ok))

    data = response.json() if status_ok else {}

    # Verifica se o ID é 1
    id_ok = data.get("id") == 1
    results.append(("ID == 1", id_ok))

    # Verifica se userId é inteiro e não nulo
    user_ok = isinstance(data.get("userId"), int)
    results.append(("userId é um inteiro", user_ok))

    # Verifica se o título está presente e não é vazio
    title_ok = bool(data.get("title"))
    results.append(("title não está vazio", title_ok))

    all_ok = True
    for desc, ok in results:
        print(f"{desc}: {'SUCESSO' if ok else 'FALHA'}")
        if not ok:
            all_ok = False

    print("\nTodos os testes passaram." if all_ok else "\nAlguns testes falharam.")


if __name__ == "__main__":
    main()
