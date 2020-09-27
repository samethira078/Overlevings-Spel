var player;
var money = 1000;
var gevecht = true;
var leven_max = 100;
var win = false;

var intro = [
"Het is het jaar 2020. Je werkt momenteel als de hoogste rank moordenaar onder de sultan van Brunei.",
"Pas geleden werd de Sultan aangevallen door de buren; de Simpsons",
"Je zou ze gekend hebben van de tv-show, maar ze bestaan echt.",
"Ze woonden in het geheim in het buurland Maleisië, totdat ze besloten om een staatsgreep op de president te plegen.",
"Nu hebben ze een koning; Homer Simpson.",
"Jij hebt een opdracht om het land te uitschakelen.",
"Als moordenaar gaan jij en je medegenoot gaan op stap.",
"Je taak is om de koning's sterke bemanning te vermoorden.",
"Je gaat nu een wapen kopen.",
"De economie in Brunei is corrupt. Iedereen is zelf verantwoordelijk voor zijn vermogen.",
"Koop dus met je eigen geld in de shop.",
"Je hebt 1000 euro klaarliggen. Maak een keuze:",
"De shotgun: sterk wapen, maar gebruikt helft van je mana bij elke kogel. Kosten: 500,-",
"Het zwaard: matig wapen, gebruikt weinig mana. Kosten: 300,-",
"Het katapult: weinig kracht, maar gebruikt super weinig mana. Kosten: 100,- "
];

for(let i = 0; i < intro.length; i++){
  alert(intro[i])
};

var wapenkeuze = prompt("Welk wapen kies je?");
wapenkeuze = wapenkeuze.toLowerCase();
while(wapenkeuze !== "shotgun" && wapenkeuze !== "zwaard" && wapenkeuze !== "katapult"){
  wapenkeuze = prompt("Voer alleen shotgun, zwaard of katapult in!");
}

if(wapenkeuze == "shotgun"){
  player = {
    leven: 100,
    kracht: 50 }
  money -= 500;
  alert("Je koos voor de shotgun. Je wapen doet maximaal 50 damage en je hebt nog " + money + " euro over!");

} else if(wapenkeuze == "zwaard"){
  player = {
    leven: 100,
    kracht: 30 }
    money -= 300;
  alert("Je koos voor het zwaard. Je wapen doet maximaal 30 damage en je hebt nog " + money + " euro over!");
} else {
  player = {
    leven: 100,
    kracht: 15 }
    money -= 100;
  alert("Je koos voor het katapult. Je wapen doet maximaal 15 damage en je hebt nog " + money + " euro over!");
}

  alert("Je bent nu onderwerg naar Maleisië en komt een bord voor de grens tegen.");
  alert("Er staan twee routes: Kota Kinabalu = Links en Putrajaya = Rechts");
  alert("Er gaan rumors rond dat Kota Kinabalu dood loopt. Maar ook dat niemand uit Putrajaya is gekomen.");

  var richting = prompt("Ga je richting Kotu Kinabalu (links), mogelijk een dood pad, of ga je langs Putrajaya(rechts) en zien we je mogelijk nooit meer");
  richting = richting.toLowerCase();
  while(richting !== "links" && richting !== "rechts"){
  richting = prompt("Ga je richting Kotu Kinabalu (links), mogelijk een dood pad, of ga je langs Putrajaya(rechts) en zien we je mogelijk nooit meer");
}

  if(richting == "rechts"){
    alert("Je loopt rechts.");
    alert("Het wordt steeds mistiger");
    alert("De rumers waren waar; je komt hier nooit uit");
    alert("Je zit vast en sterft door de honger");
  }
  else if(richting == "links"){
    alert("Richting Kotu Kinabalu is het rustig. Het is een verlaten gebied waar zelfs geen vogels te horen zijn.");
    alert("Alles lijkt rustig te gaan. Volgens de kaart ben je er in 2 uur.");
    alert("Maar dan komt er iemand tevoorschijn. Een persoon van 2 meter loopt langzaam naar je toe");
    alert("Het is Nelson! Je kent hem vast als de pestkop van Bart Simpson.");
    alert("Niet meer praten, vechten!");

    let nelson = {
    leven: 50,
    kracht: 20
    } 

    while(gevecht){
      if(player.leven > 1){
         var aanval_speler = Math.floor(Math.random() * player.kracht);
         var gevecht_speler = nelson.leven -= aanval_speler;
         alert("Jij deed " + aanval_speler + " damage tegen Nelson. Nelson heeft nu " + nelson.leven + "% leven over");
         }else { break; }
         if(nelson.leven > 1){
         var aanval_nelson = Math.floor(Math.random() * nelson.kracht);
         var gevecht_nelson = player.leven -= aanval_nelson;
         alert("Nelson deed " + aanval_nelson + " damage tegen jou. Jij hebt nu " + player.leven + "% leven over");
       } else { break; }}

      if(player.leven > 1 && nelson.leven < 1){
      alert("Jij won het gevecht! Als belonging krijg je 100 euro, je leven terug en 10 erbij!");

      money += 100;
      leven_max += 10;
      player.leven = leven_max;

      alert("Je komt terecht bij een stad.");
      alert("Het komt je bekend voor; hier heb je ooit je wapens geupgraded.");
      alert("De meneer die verkocht was Gargamel.");
      alert("Boven op een berg zie je een kasteel. Dat is vast waar hij woont!");
      alert("Je loopt erheen");
      alert("Onderweg zie je een man bewusteloos op de grond liggen.");

      var richting = prompt("Ga je hem helpen? (ja/nee)");
      richting = richting.toLowerCase();
      while(richting !== "ja" && richting !== "nee"){
      richting = prompt("Ja/Nee"); }

      if(richting == "ja"){
        alert("Je loopt naar hem toe");
        alert("Je raakt hem aan.");
        alert("Hij pusht je naar achteren! Het is Black Bolt!");
        alert("Hij is een van de sterkte Marvel superhelden");
        alert("Je weet dat je hem waarschijnlijk niet kan verslaan. Maar toch probeer je het!");

      let black_bolt = {
      leven: 90,
      kracht: 60
      } 
    while(gevecht){
      if(player.leven > 1){
         var aanval_speler = Math.floor(Math.random() * player.kracht);
         var gevecht_speler = black_bolt.leven -= aanval_speler;
         alert("Jij deed " + aanval_speler + " damage tegen Black Bolt. Black Bolt heeft nu " + black_bolt.leven + "% leven over");
         }else { break; }
         if(black_bolt.leven > 1){
         var aanval_nelson = Math.floor(Math.random() * black_bolt.kracht);
         var gevecht_nelson = player.leven -= aanval_nelson;
         alert("Black bolt deed " + aanval_nelson + " damage tegen jou. Jij hebt nu " + player.leven + "% leven over");
       } else { break; }}
       if(player.leven > 1 && nelson.leven < 1){
        alert("Jij won het gevecht! Als belonging krijg je 500 euro, je leven terug en 5 erbij!");
        money += 500;
        leven_max += 5;
        player.leven = leven_max;

      var keuze = [
        "Je loopt het kasteel binnen",
        "Binnen staat Gargamel te koken.",
        "Je vraagt of hij upgrades aanbied",
        "Gargamel toont je een lijst met upgrades",
        "Als jij het katapult had gekozen, heb jij de mogelijk voor de sterkste Elektronish Power!",
        "Elektronish Power: Je krijgt +120 kracht erbij; kosten= 1400 euro",
        "Maar het was vrijwel lastig om het te krijgen, vooral omdat je tegen Black Bolt moest vechten!",
        "Andere optie:",
        "Black Magic Power: Je krijgt +50 kracht erbij; kosten= 1200 euro",
        "Je kunt dit krijgen door het kiezen van een zwaard.",
        "Ander optie:",
        "Secret Health Potion: Je krijgt +10 kracht en +75 leven erbij; kosten= 500 euro",
        "De potion is verkrijgbaar voor iedereen."];

        for(let i = 0; i < keuze.length; i++){
          alert(keuze[i]);
        }

        var upgrade = prompt("Welke kies je? Typ getal in: (1)Elektronish Power, (2)Black Magic Power, (3)Secret Health Potion");
        var upgrade1 = money - 1400;
        var upgrade2 = money - 1200;
        var upgrade3 = money - 500;

        while(upgrade !== "1" || upgrade !=="2" || upgrade !=="3"){
          if(upgrade == "1" && upgrade1 > -1){
            money -= 1400;
            player.kracht += 120;

            alert("Gekocht: Elektronish Power");
            alert("Je stats zijn nu: " + player.leven + "% leven. Je wapen doet: " + player.kracht + " damage. En je hebt " + money + " euro over" );
            break;
          }
         if(upgrade == "2" && upgrade2 > -1){
            money -= 750;
            player.kracht += 75;

            alert("Gekocht: Black Magic Power");
            alert("Je stats zijn nu: " + player.leven + "% leven. Je wapen doet: " + player.kracht + " damage. En je hebt " + money + " euro over" );
            break;
          }
          if(upgrade == "3" && upgrade3 > -1){
            money -= 500;
            player.kracht += 10;
            player.leven += 75;

            alert("Gekocht: Secret Health Potion");
            alert("Je stats zijn nu: " + player.leven + "% leven. Je wapen doet: " + player.kracht + " damage. En je hebt " + money + " euro over" );
            break;
          }
            else {
            var upgrade = prompt("Te duur of je hebt geen [1/2/3] getypt! Welke kies je? Typ getal in: (1)Elektronish Power, (2)Black Magic Power, (3)Secret Health Potion");
          }
        } 
        alert("Je bedankt hem en verlaat de locatie.");
        alert("Je komt aan bij de grens. Er zit een klein open gat waar je langs kunt");
        alert("Je zet je eerste stappen in Maleisië");
        alert("Onderweg naar het koninklijk huis van Homer Simpson, komt er een man in een volledig pak langs");
        alert("Hij ziet er duisterig uit. Is dat-- dat Deathstroke?");
        alert("Een gevecht start: Hij valt aan!");

        let deathstroke = {
        leven: 140,
        kracht: 80 }

        while(gevecht){
          if(player.leven > 1){
          var aanval_speler = Math.floor(Math.random() * player.kracht);
          var gevecht_speler = deathstroke.leven -= aanval_speler;
          alert("Jij deed " + aanval_speler + " damage tegen Deathstroke. Deathstroke heeft nu " + deathstroke.leven + "% leven over");
          }else { break; }
          if(deathstroke.leven > 1){
          var aanval_nelson = Math.floor(Math.random() * deathstroke.kracht);
          var gevecht_nelson = player.leven -= aanval_nelson;
          alert("Deathstroke deed " + aanval_nelson + " damage tegen jou. Jij hebt nu " + player.leven + "% leven over");
       }  else { break; }}

       if(player.leven > 1 && deathstroke.leven < 1){
        alert("Jij won het gevecht! Als belonging krijg je 20 kracht, je leven terug en 25 erbij!");
        player.kracht += 20;
        leven_max += 25;
        player.leven = leven_max;

        alert("Je onderzoekt zijn lichaam. Je vindt een kaart en een medaille");
        alert("Op de medaille staat 'Number 1 defender of the king!");
        alert("Hij moest vast een hoge positie hebben. Je hebt een plan:");
        alert("Je draagt zijn compleet bedekt pak en gaat naar het koninklijke huis.");
        alert("Met de kaart weet je er te komen via een geheim weg.");
        alert("Bij de poort laten ze je binnen. Ze kunnen niet zien wie je bent.");
        alert("Je komt terecht in de Koning's slaapkamer moet je goed verbergen.");

        var verberg = prompt("Verg je in zijn kast, badkamer of onder zijn bed");
        verberg = verberg.toLowerCase();
        while(verberg !== "kast" && verberg !== "badkamer" && verberg !== "bed"){
        verberg = prompt("Typ alleen kast/badkamer/bed");
        }

        let homer = {
          leven: 200,
          kracht: 100 
        }

        if(verberg == "kast"){
          alert("Je opent zijn kast en neemt plaats.");
          alert("Je wacht tot de koning binnen komt.");
          alert("Hij is aangekomen.");
          alert("Homer Simpson ligt in zijn bed.");
          alert("Je wacht tot hij in slaap valt.");
          alert("Dat dacht je dan!");
          alert("Precies wanneer je de kast opent, steekt hij je neer");
          alert("Je verliest de helft van je leven");
          alert("Toch ga je vechten! Bereid je voor!");

          player.leven /= 2;
          alert(player.leven);

          while(gevecht){
            if(player.leven > 1){
            var aanval_speler = Math.floor(Math.random() * player.kracht);
            var gevecht_speler = homer.leven -= aanval_speler;
            alert("Jij deed " + aanval_speler + " damage tegen Homer. Homer heeft nu " + homer.leven + "% leven over");
            }else { break; }
            if(homer.leven > 1){
            var aanval_nelson = Math.floor(Math.random() * homer.kracht);
            var gevecht_nelson = player.leven -= aanval_nelson;
            alert("Homer deed " + aanval_nelson + " damage tegen jou. Jij hebt nu " + player.leven + "% leven over");
          }else { break; }}

           if(player.leven > 1 && homer.leven < 1){
           alert("Jij won het gevecht! Je hebt de koning vermoord en het spel uitgespeeld. Goed gedaan!");
           } else {
            alert("Dood!");
           }

        } else if(verberg == "badkamer"){
          alert("Je loopt de badkamer in.");
          alert("Je merkt dat het open is. Geen plek om te verbergen.");
          alert("Je wilt terug om een ander plek te vinden, maar de Koning is er al.");
          alert("Je verstopt je in de klaargezette warm bad.");
          alert("De koning doet de badkamer deur open. Hij merkt dat het water beweegt.");
          alert("Hij zet zijn haardroger aan en gooit hem erin.");
          alert("Door de elektronishe schok sterf je.");
        } else {
          alert("Je verbergt je onder zijn bed.");
          alert("De koning komt binnen en springt op zijn bed.");
          alert("Je wacht tot hij aan slaap valt.");
          alert("Wanneer je hem hoort snurken doe je een aanval.");
          alert("Je steekt hem neer! De koning verliest half zijn leven.");
          alert("Maar toch wilt hij tegen jou vechten.");
          homer.leven /= 2;
          while(gevecht){
            if(player.leven > 1){
            var aanval_speler = Math.floor(Math.random() * player.kracht);
            var gevecht_speler = homer.leven -= aanval_speler;
            alert("Jij deed " + aanval_speler + " damage tegen Homer. Homer heeft nu " + homer.leven + "% leven over");
            }else { break; }
            if(homer.leven > 1){
            var aanval_nelson = Math.floor(Math.random() * homer.kracht);
            var gevecht_nelson = player.leven -= aanval_nelson;
            alert("Homer deed " + aanval_nelson + " damage tegen jou. Jij hebt nu " + player.leven + "% leven over");
          }else { break; }}

           if(player.leven > 1 && homer.leven < 1){
           alert("Jij won het gevecht! Je hebt de koning vermoord en het spel uitgespeeld. Goed gedaan!");
           } else {
            alert("Dood!");
           }

        }
      } else {
        alert("Dood!");
      }

      }else {
        alert("Dood!");
      }
      } else {
        alert("De man die bewusteloos lag, vermoord je van achteren.");
        alert("Het was Black Bolt. Je moest hem vechten!");
        alert("Dood!");

      }} else { alert("Dood!");}} 

  else {

  }