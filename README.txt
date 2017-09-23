####################################################
##=========Estoque v0.0.3.3.3.0.123.x.z.y=========##
####################################################
Este programa está em versão pré alfa da versão gama.


====================================================
                Pré requisitos
====================================================

Necessario ter o Node.js instalado. Para sanar as
demais dependencias é necessario estar no diretório
onde os arquivos se encontram, abrir o terminal e
usar os comandos:

>>> npm install

====================================================
              Rodando a Palicação
====================================================

Para fazer a aplicação começar a "funcionar", é pre-
ciso rodar o banco de dados com o comando:

>>> mongod --dbpath <caminho de diretorios>/MEAN/db

(O caminho deve ser alterado de acordo com o caminho
onde os arquivos foram extraidos)


##########
##ATENÇÃO - O terminal ficará parado, para usa-lo
##será necessario abrir outra aba ou janela. Este
##terminal não deve ser fechado até o termino da apli-
##cação.
#########


Com o servidor rodando, no terminal, dentro do dire-
tório /MEAN extraido, deve-se rodar o servidor com
o comando:

>>> node main.js

Finalizando com a mensagem 'Conectado no DB', esta
pronto para o uso.

A aplicação fica na porta 8080, acessado por:

http://localhost:8080/

Colocando endereço no navegador, a aplicação abrirá.
