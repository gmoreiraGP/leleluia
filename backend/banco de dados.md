## Banco de dados

### Usuários

    - id !
    - firstName !
    - lastName !
    - email !
    - password !

### Empresas

    - Nome/Razão social !
    - CNPJ !
    - Inscrição Estadual ?
    - Endereço !
    - [Nota Fiscal]

### Nota fiscal

    - Número da nota !
    - Emissão !
    - [produtos]
    - Valor total do produtos (valor automático)
    - Valor total da nota (valor automático)

    ### Produtos
        - Nome do produto
        - Valor do produto
        - Quantidade

    ### Destinatário
        - Nome
        - CPF / CNPJ
        - Endereço
        - CEP
        - Município
        - Bairro
        - Telefone
        - Status (Em separação, em trânsito, entregue)
