# Aarhus-Duck-Race-Demo
Aarhus-Duck-Race-Demo

# Tools requirements

Docker, Python, Yarn, pip, Typescript, Node
<code>sudo npm install --global yarn</code>
<code>git clone https://github.com/ATS-SKP-DataIT/skp-projekt-aarhus-duck-race.git</code>

# Localhost url

Backend url: http://0.0.0.0:8000/ | http://localhost:8000/

Frontend url: http://0.0.0.0:3000/ | http://localhost:3000/

# Setup cli 

pip3 install -e .

# CLI COMMANDS

## Devlopment envirment CLI

build/up dev env ```devenv dev start```

shutdown dev env ```devenv dev down```

build dev env ```devenv dev build```

up dev env ```devenv dev up```

## Production CLI

build/up dev env ```devenv prod start```

shutdown dev env ```devenv prod down```

build dev env ```devenv prod build```

up dev env ```devenv prod up```

## Postgresql CLI

open sql terminal ```devenv psql```

## Fastapi (BACKEND) CLI

fastapi logs ```devenv fastapi logs```

## Docker CLI

Frontend ```devenv docker frontent <command>```

Backend ```devenv docker backend <command>```

database (Postgres) ```devenv docker db <command>```

## Yarn (FRONTEND) CLI

yarn logs ```devenv yarn logs```

yarn cli ```devenv yarn <command>```

