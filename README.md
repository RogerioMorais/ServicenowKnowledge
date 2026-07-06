# ServicenowKnowledge

## Índice remissivo

### Materiais principais
- [Material de estudo final](Adm%20Fundations/basic/material_estudo_csa_servicenow_final.md)
- [Material consolidado para CSA](Adm%20Fundations/basic/material_estudo_csa_servicenow_consolidado.md)
- [Material otimizado de estudo](Adm%20Fundations/basic/material_estudo_csa_servicenow_otimizado.md)
- [Perguntas e respostas para treino](Adm%20Fundations/basic/perguntas_respostas_csa_servicenow.md)
- [Flashcards](Adm%20Fundations/basic/flashcards_csa_servicenow.md)
- [Flashcards visuais em Mermaid](Adm%20Fundations/basic/flashcards_visual_csa_servicenow.md)
- [Resumo de contexto](Adm%20Fundations/basic/contexto.md)
 - [CSA Simulator (practice exam)](simulado_csa/README.md)

### Módulos do curso
- [Módulo 01](Adm%20Fundations/basic/modelo%2001.md)
- [Módulo 02](Adm%20Fundations/basic/modulo%2002.md)
- [Módulo 03](Adm%20Fundations/basic/modulo%2003.md)
- [Módulo 04](Adm%20Fundations/basic/modulo%2004.md)
- [Módulo 05](Adm%20Fundations/basic/mosulo%2005.md)
- [Módulo 06](Adm%20Fundations/basic/modulo%2006.md)
- [Módulo 07](Adm%20Fundations/basic/modulo%2007.md)
- [Módulo 08](Adm%20Fundations/basic/modulo%2008.md)

### Como usar
- Comece pelo material consolidado para revisar os pontos mais importantes.
- Use os módulos individuais para aprofundar conceitos específicos.
- Refaça o checklist de revisão antes da prova.

### Docker commands (quick)

Copy these commands to build and run the CSA simulator locally (from the `simulado_csa` folder):

```bash
# from the repository root
# build image
docker build -f simulado_csa/Dockerfile -t csa-simulator:latest .

# run container and map port 8080 -> nginx:80
# this keeps the terminal attached
docker run --rm -p 8080:80 csa-simulator:latest

# run container in detached mode (free the terminal)

docker run --rm -d --name csa-simulator -p 8080:80 csa-simulator:latest


# stop the container
docker stop csa-simulator

# start/restart the container
docker start csa-simulator

# open the simulator in your browser:
# http://localhost:8080
```

To stop the detached container:

```bash
docker stop csa-simulator
```

To stop the running container, press `Ctrl+C` in the terminal where `docker run` is executing.
