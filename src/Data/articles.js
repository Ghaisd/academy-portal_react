const articles = [
  {
    id: 1,
    AuthorId: 97846,
    AuthorName: 'Ghais',
    AuthorImageLink: '/images/Ghais.jpg',
    Title: 'Demo Day vel overstått!',
    Content:
      'Det har etterhvert blitt en fin tradisjon med Demo Day, der Ikomm inviterer inn en rekke interesserte mennesker for å vise frem studentenes Case Study-prosjekter. Dette er prosjekter det har blitt jobbet med i en månede, og markerer både siste del av kursperioden, og siste dagen med Erik som kursholder. Etter dette er det praksis, og forberedelser til den, som står på menyen. Dagen bød på en rekke fine presentasjoner og tilogmed noen overraskelser, her har vi laget en liten oppsummering av de prosjektene som ble vist frem. ',
    ImageLInk: '/images/Article1.jpg',
    CanPublish: true,
    IsPublished: true,
    DateOfCreate: {
      $date: {
        $numberLong: '1653221212043',
      },
    },
  },
  {
    id: 2,
    AuthorId: 55969,
    AuthorName: 'Tor',
    AuthorImageLink: '/images/Tor.png',
    Title: 'En homage til Erik',
    Content:
      'Erik har vært fantastisk med oss, så vi ønsket å være litt fantastiske tilbake. Her har vi laget en collage av gode minner som vi kaller for «En homage til Erik». Stykket er tonesatt av Kjetil Nordbye på Flygel og Kristian Enge på Tamburin.   ',
    ImageLInk: '/images/Homage til Erik.png',
    CanPublish: true,
    IsPublished: true,
    DateOfCreate: {
      $date: {
        $numberLong: '1653221212043',
      },
    },
  },
  {
    id: 3,
    AuthorId: 33466,
    AuthorName: 'Argyro',
    AuthorImageLink: '/images/iro.png',
    Title: 'Why I love .NET?',
    Content:
      '.NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework. The project is primarily developed by Microsoft employees by way of the .NET Foundation, and released under the MIT License.',
    ImageLInk: '/images/dotnet.jpg',
    CanPublish: true,
    IsPublished: true,
    DateOfCreate: {
      $date: {
        $numberLong: '1653221852281',
      },
    },
  },
  {
    id: 4,
    AuthorId: 36824,
    AuthorName: 'Aksel',
    AuthorImageLink: '/images/Aksel.jpg',
    Title: 'Når Ikomm Academy gikk full blown hipster',
    Content:
      'At Steffen ligger litt foran de fleste av oss når det kommer til kreativ frontend-utvikling, tok det ikke lang tid før vi forstod. Allikevel ble vi tatt på senga når det var dags for å presentere mini-prosjekter. Hjemmelaga Pixelart er vi ikke bortskjemte med! Les mer om både Steffens miniprosjekt, og de andre mini-prosjektene, som har preget påsken i Akademiet. ',
    ImageLInk: '/images/Steffen Mini Project.png',
    CanPublish: true,
    IsPublished: true,
    DateOfCreate: {
      $date: {
        $numberLong: '1653296910545',
      },
    },
  },
  {
    id: 5,
    AuthorId: 36824,
    AuthorName: 'Aksel',
    AuthorImageLink: '/images/Aksel.jpg',
    Title: 'Det første sammenbruddet er et faktum!',
    Content:
      'Det er ikke mange ting vi vet på forhånd når vi starter opp en ny runde med Ikomm Academy, men at det kommer et sammenbrudd eller fire i løpet av de tre første kursukene, det føler vi oss ganske sikre på. Det må selvfølgelig feires, og ufarliggjøres. Vi letter litt på sløret fra dagbøkene våres. ',
    ImageLInk: '/images/Breakdown Day.jpg',
    CanPublish: true,
    IsPublished: true,
    DateOfCreate: {
      $date: {
        $numberLong: '1653301373678',
      },
    },
  },
  {
    id: 64517,
    AuthorId: 67645,
    AuthorName: 'Kristian',
    AuthorImageLink: '/images/Avatar2.png',
    Title: 'Suverene vinnere på allmennquizen',
    Content:
      'Vi prøvde et nytt konsept i årets introuke, og det var en tradisjonsrik allmennquiz til å avslutte ukens begivenheter. Quizmaster Aksel hadde ikke spart på konfekten, og det var en serie med tøffe spørsmål som ventet de tre lagene. Ekstra gledelig var det at vi fikk med Erlend og Jens Ole fra NAV, og mentor Michael fra Eidsiva, på begivenhetene. Her har vi nok skapt en ny tradisjon. Klikk deg inn for å se både spørsmålene, svarene, og resultatene. ',
    ImageLInk: '/images/Trivia Night.gif',
    CanPublish: true,
    IsPublished: true,
    DateOfCreate: {
      $date: {
        $numberLong: '1653301373678',
      },
    },
  },
];

export default articles;
