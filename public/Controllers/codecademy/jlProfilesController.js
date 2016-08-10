app.controller('jlProfilesController', [ function(){
    var self = this;
    self.test = 'is working';
    
    self.heros = [
        {
                name:'Superman',
                description:'Superman is a fictional superhero appearing in American comic books published by DC Comics. He was created by writer Jerry Siegel and artist Joe Shuster in 1933; later, in 1938, the character was sold to Detective Comics, Inc. (later DC Comics). Superman first appeared in Action Comics #1 (June 1938) and subsequently appeared in various radio serials, newspaper strips, television programs, films, and video games. With this success, Superman helped to create the superhero genre and establish its primacy within the American comic book.',
                powers:'super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor',
                alias:'Man of Steel',
                base:'Metropolis',
                occupation:'Reporter',
                img:'https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png',
                img_artist:'Alex Ross',
                artist_wiki:'https://en.wikipedia.org/wiki/Alex_Ross'
            },
            {
               name:'Batman',
               description:'Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27 (May 1939). Originally named "the Bat-Man", the character is also referred to by such epithets as the "Caped Crusader", the "Dark Knight", and the "World\'s Greatest Detective".',
                powers:'exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology',
                alias:'Dark Knight, Caped Crusader, Matches Malone',
                base:'Gotham City',
                occupation:'CEO of Wayne Enterprises',
                img:'https://upload.wikimedia.org/wikipedia/en/7/75/Comic_Art_-_Batman_by_Jim_Lee_%282002%29.png',
                img_artist:'Jim Lee',
                artist_wiki:'https://en.wikipedia.org/wiki/Jim_Lee', 
            },
            {
                name:'Wonder Woman',
                description:'Wonder Woman is a fictional superhero appearing in American comic books published by DC Comics.The character is a warrior princess of the Amazons (which are based on the Amazons of Greek mythology) and is known in her homeland as Princess Diana of Themyscira. When outside her homeland, she is sometimes known by the secret identity Diana Prince. She is gifted with a wide range of superhuman powers and superior combat and battle skills. She possesses an arsenal of weapons, including the Lasso of Truth, a pair of indestructible bracelets, a tiara which serves as a projectile, and (in older stories) a range of devices based on Amazon technology',
                powers:'super strength, invulnerability, flight, combat skill, combat strategy, superhuman agility, healing factor, magic weaponry',
                alias:'Princess Diana of Themyscira',
                base:'Themyscira',
                occupation:'Amazon Princess',
                img:'https://upload.wikimedia.org/wikipedia/en/8/8c/WonderWoman-Ross.png',
                img_artist:'Alex Ross',
                artist_wiki:'https://en.wikipedia.org/wiki/Alex_Ross'
            },
            {
                name:'The Flash',
                description:'The Flash (Barry Allen) is a superhero appearing in American comic books published by DC Comics. Barry Allen is the second character known as Flash. The character first appeared in Showcase #4 (October 1956), created by writer Robert Kanigher and penciler Carmine Infantino.His name combines talk show hosts Barry Gray and Steve Allen.',
                powers:'super speed, intangibility, superhuman agility',
                alias:'Scarlet Speedster, The Fastest Man Alive',
                base:'Star City',
                occupation:'Forensic scientist',
                img:'https://upload.wikimedia.org/wikipedia/en/a/a4/Barry_Allen_Flash.jpg',
                img_artist:'Ivan Reis',
                artist_wiki:'https://en.wikipedia.org/wiki/Ivan_Reis'
            },
            {
                name:'Green Lantern',
                description:'Hal Jordan, known as Green Lantern, is a fictional superhero appearing in American comic books published by DC Comics. The character was created in 1959 by writer John Broome and artist Gil Kane, and first appeared in Showcase #22 (October 1959). Hal Jordan is a reinvention of a previous character called Green Lantern that had appeared in 1940s comic books as the character Alan Scott.',
                powers:'Incredible will power, experienced hand-to-hand combatant',
                alias:'Pol Manning, Parallax, Spectre, Highball',
                base:'The Watchtower',
                occupation:'Fighter Pilot',
                img:'https://upload.wikimedia.org/wikipedia/en/1/16/GreenLantern.jpg',
                img_artist:'Alex Ross',
                artist_wiki:'https://en.wikipedia.org/wiki/Alex_Ross'
            },
            {
                name:'Aquaman',
                description:'Aquaman is a fictional superhero appearing in American comic books published by DC Comics. Created by Paul Norris and Mort Weisinger, the character debuted in More Fun Comics #73 (November 1941).Initially a backup feature in DC\'s anthology titles, Aquaman later starred in several volumes of a solo title. During the late 1950s and 1960s superhero-revival period known as the Silver Age, he was a founding member of the Justice League of America. In the 1990s Modern Age, Aquaman\'s character became more serious than in most previous interpretations, with storylines depicting the weight of his role as king of Atlantis.',
                powers:'super strength, durability, control over sea life, exceptional swimming ability, ability to breathe underwater',
                alias:'Orin, The King of the Seven Seas, The Dweller-in-the-Depths, The Aquatic Ace, The Marine Marvel, Terra Firma',
                base:'Atlantis',
                occupation:'King of Atlantis',
                img:'https://upload.wikimedia.org/wikipedia/en/0/0a/Aquaman_issue_1%2C_the_new_52.jpg',
                img_artist:'Ivan Reis',
                artist_wiki:'https://en.wikipedia.org/wiki/Ivan_Reis'
            },
            {
                name:'Martian Manhunter',
                description:'The Martian Manhunter (J\'onn J\'onzz) is a fictional superhero appearing in American comic books published by DC Comics. Created by writer Joseph Samachson and designed by artist Joe Certa, the character first appeared in Detective Comics #225 "The Manhunter From Mars" in November 1955. He is one of the seven original members of the Justice League of America.',
                powers:'super strength, invulnerability, enhanced speed, shapeshifting, invisibility, telepathy, telekinesis, intelligence, intangibility, optic blasts',
                alias:'John Jones, Gold Hunter',
                base:'Mars',
                occupation:'detective',
                img:'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/MartianManhunterRossAlex.jpg/244px-MartianManhunterRossAlex.jpg',
                img_artist:'Alex Ross',
                artist_wiki:'https://en.wikipedia.org/wiki/Alex_Ross'
            }]
}]);