# Kravspecifikation for Aarhus Duckrace projekt
Version 1.0
Af: Karsten Reitan Sørensen

## Resume
Indledning/introduktion fra Niels
Projektet drejer sig om et væddeløb med små gule badeænder. Hver enkel and er nummereret og folk udefra kan købe en and. A la en lodseddel. Antallet er på nuværende tidspunkt 5000 og det er sat til at løbe af stablen på strækningen Vester Allé – Immervad. Foreløbig tidshorisont er maj 2022 i en af højtidelighederne. 

Deadline sat til 1-5-2022

Projektet sker i samarbejde med og overskuddet går til foreningen Fonden Sølund, som har fokus på Udviklingshæmmede børn. Arrangementet er ledsaget af en lille folkefest som afholdes i Mølleparken. 

I tillæg til salg af retten til deltagelse i væddeløbet skal der også være mulighed for sponsorering. Det indtænkes i arrangementet såvel som funktionalitet i appen. Nuværende er der god kontakt til Aarhus Stiftstidende og AGF, som også forventes at involveret i salget af ænder. Der indtænkes en prototype for appen som Niels kan bruge i at skaffe sponsorer.

Der er lidt tvivl om at man som undervisningsinstitution må deltage i den slags arrangementer. Der er også et generelt spørgsmål om at skolen ikke må lave konkurrenceforvridende arbejde. Morten Møller Jensen undersøger med LUU om det juridiske er på plads. LUU har repræsentanter for Dansk Industri og Dansk Metal, så en godkendelse herfra vil give grønt lys for lignende projekter.

Karsten er projektleder fra AARHUS TECH. Projektet rummer stor mulighed for læring blandt vores elever. Der er allerede udtaget 4 elever som sammen med Mathias starter på udviklingen af app.

Mathias har allerede lavet en prototype, men i forbindelse med de nye elever vil de komme til at lave projektet selv. 

Til projektet udarbejdes en kravspecifikation, som samler krav, aftaler og interessenter for projektet.

# Liste over funktionaliteter
## Funktionalitet som gælder både mobile app og webside
- Mulighed for at oprette sig som bruger
- Mulighed for at logge ind, når man er eksisterende bruger
- Profil side for brugeren
- Køb af lodseddel i form af retten til at specifik nummereret and deltager
- Oversigt over købte ænder (lodder) - resultat side
- Sponsor sektion
- Oplysninger/reklame for det fysiske arrangement

## Funktionalitet som forventes overholdt
- Holde styr på kunder og deres købte ænder
- Sikker betaling
- Synlig sponsorer
- Projektet er app og webside til arrangementet
- Overholde GDPR
- Niels samarbejder med mediegrafikerne til det grafisk – at få etableret en grafisk profil
- Lavet en design manual, så  mobil app og webside overholder den grafiske profil

## Uden for scope i denne produktion
- Der er stadig et udestående med drone flyvning i forbindelse med arrangementet, tilladelser og vindpåvirkning på ænderne
- Der er et udestående med tilladelser generelt




# Teknologi - Produktionsmiljø
### Shortcut (skiftet navn fra Clubhouse.io)
Shortcut er et produktion plænlægningsværktøj som lægger sig tøt op SCRUM arbejdsmetoden som bliver anvendt i software udvikling. Den integreres sig med mange eksterne almindeligt brugte værktøjer f.eks. Slack, GitLab, GitHub og en række Google services.

### Slack
Slack er en proprietær forretningskommunikationsplatform udviklet af det amerikanske softwarefirma Slack Technologies og ejet af Salesforce fra 2021. Slack tilbyder mange funktioner i IRC-stil, herunder vedvarende chatrum organiseret efter emne, private grupper og direkte beskeder. Slack bliver brugt til at holde en strukturet kommunikation under projektforløbet. 

### GitLab
Oversat fra engelsk-GitLab er et webbaseret DevOps livscyklusværktøj, der giver en Git repository manager, der leverer wiki, problemsporing og deployment pipeline funktioner. GitLab er valgt fordi den har et højere antal udviklere som gratis kan være tilmeldt et projekt. Software/service fungerer under en open source-licens udviklet af GitLab Inc.

## Scaling og management
### Docker
Docker er et open-source-projekt, som automatiserer ibrugtagning af computerprogrammer inden i softwarecontainere, ved at tilvejebringe et yderligere abstraktionslag og automation af virtualisering på styresystemniveau på Linux, OS X og Microsoft Windows. Apache-licens 2.0 Open source.

### Kubernetes
Kubernetes er et open source containerstyringssystem til automatisering af implementering, skalering og administration af computerprogrammer. Det blev oprindeligt designet af Google og vedligeholdes nu af Cloud Native Computing Foundation.
Man kan også opfatte Kubernetes som håndtering af containerpladsforme, som f.eks. Docker.

### Deno
Deno er et open source, runtime system for JavaScript og TypeScript. Det benyttes til udvikling af server-side webapplikationer. Deno er baseret på V8 JavaScript og udviklet i Rust. Deno er udviklet af Ryan Dahl som også er udvikleren bag Node.js og er under aktiv udvikling og forbedring eks. er sidste stable release fra 24. August 2021. MIT License.

## Database
### MariaDB - open source-gren af MySQL
MariaDB er en community-udviklet, kommercielt understøttet gren af MySQL relationsdatabase. Den er er beregnet til at forblive gratis og open source-software under GNU General Public License. GPLv2, LGPLv2.1 (client libraries)

## Mobil app
React kan bruges som en base i udviklingen af ​​webside eller mobile applikationer. 
### React Native
React Native er en open-source UI-software framework lavet af Facebook. Det bruges til at udvikle applikationer til Android, Android TV, iOS, macOS, tvOS, Web, Windows og UWP. React Native nok det mest populære JavaScript library til at bygge applikationer som kører på alle enheder og platforme - herunder iOS og Android. Samtidig rummer det mulighed for at lave platformsspecifikke løsninger og/eller versioner. Community for dette framework er og har været stort og aktivt siden introduktionen fra Facebook i 2018.

## Webside
### React.js
React er et gratis og open source-front JavaScript-bibliotek til opbygning af brugergrænseflader eller UI-komponenter. Det vedligeholdes af Facebook og et community af individuelle udviklere og virksomheder.

## Design manual
Mediegrafikerne har lavet en design manual som viser satruktur og udseende<br />
Den kan ses på:<br />
https://xd.adobe.com/view/9825b711-5cf4-492b-92f9-bdfe5369ec2c-cd76/specs/
<br/>
<br/>

# Interessenter
## Aarhus Duck race
Niels Boye-Nielsen
Mail: nbn@b-light.dk
Mobil: 40308877

## AARHUS TECH udvikling af App og webside
Karsten Reitan Sørensen<br>
Project Owner - Skolepraktikinstruktør Programmørerne AARHUS TECH<br>
Mail: krs@aarhustech.dk<br>
Mobil (arb.): 22234565<br>

Kenneth Løvgren<br>
Underviser AARHUS TECH<br>
Mail: klt@aarhustech.dk

Iben Rikke Carøe Solgaard
Skolepraktikinstruktør Mediegrafiker AARHUS TECH
Mail: ics@aarhustech.dk
Mobil: 24899500

Morten Møller Jensen<br>
Uddannelsesleder AARHUSTECH<br>
Mail: mmj@aarhustech.dk
## Developer team
Alex Møller<br>
Mail: alex861b@edu.aarhustech.dk

Jonas Schou Bülow<br>
Mail: jona535m@edu.aarhustech.dk

Sebastian Clausen<br>
Mail: seba757i@edu.aarhustech.dk

Frank Møller Jensen<br>
Mail: 	fran751b@edu.aarhustech.dk

## Grafisk team 
Kan træffes på: kontakt@inhouse.dk<br/>
<br/>
Amanda Hertz<br/>
Tovholder<br/>
<br/>
Sofie Langballe Andersen<br/>
Mediegrafiker<br/>
<br/>
Tanja Fredsgaard Kielland-Brandt<br/>
Mediegrafiker<br/>

## Sponsorer
### Aarhus Stiftstidende
### AGF
