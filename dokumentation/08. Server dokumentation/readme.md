# Server dokumentation
![image](https://user-images.githubusercontent.com/82814155/144196751-75bb005d-e73b-40b2-978c-18f60b61f9f2.png)

Der er lavet en prøve på Amazon AWS, som skal efter prøve den fulde 

Kildekode og adgang til github ligger i mappen:

/var/www/skp-projekt-aarhus-duck-race

sudo yarn build

Hvis man har brug for at kopiere det manuelt kan det gøres med:
sudo docker cp build/. 9fc7f40915c2:/usr/share/nginx/html/. 

Hvor 9fc7f40915c2 i dette tilfælde er container id for <i>skp-projekt-aarhus-duck-race_nginx</i>
og man står i: 
```/var/www/skp-projekt-aarhus-duck-race/frontend```

## Opdatering af Node til version 12
Tjek version
```nodejs --version```

