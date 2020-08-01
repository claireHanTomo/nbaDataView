export function getPlayerInfo(name){
    for (let i = 0;i < db.length;i++) {
        if (db[i].playerName === name) {
            return db[i];
        }
    }
}

/*generate random shots data*/
export function getShots(){

    const res = []
    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 1
        let y = Math.floor (Math.random() * 11) + Math.random()
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 47
        let y = Math.floor (Math.random() * 11) + Math.random()
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 3
        let y = Math.floor (Math.random() * 3) + Math.random() +10
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 47
        let y = Math.floor (Math.random() * 3) + Math.random() + 10
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 5
        let y = Math.floor (Math.random() * 2) + Math.random() + 20
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 45
        let y = Math.floor (Math.random() * 2) + Math.random() + 20
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 3
        let y = Math.floor (Math.random() * 2) + Math.random() + 17
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 47
        let y = Math.floor (Math.random() * 2) + Math.random() + 17
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 7
        let y = Math.floor (Math.random() * 2) + Math.random() + 21
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 43
        let y = Math.floor (Math.random() * 2) + Math.random() + 21
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 9
        let y = Math.floor (Math.random() * 2) + Math.random() + 23
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 41
        let y = Math.floor (Math.random() * 2) + Math.random() + 23
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 11
        let y = Math.floor (Math.random() * 2) + Math.random() + 25
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 39
        let y = Math.floor (Math.random() * 2) + Math.random() + 25
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 13
        let y = Math.floor (Math.random() * 2) + Math.random() + 26
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 37
        let y = Math.floor (Math.random() * 2) + Math.random() + 26
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 15
        let y = Math.floor (Math.random() * 2) + Math.random() + 27
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 35
        let y = Math.floor (Math.random() * 2) + Math.random() + 27
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 17
        let y = Math.floor (Math.random() * 2) + Math.random() + 28
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 50;i++) {
        let x = Math.random() + 33
        let y = Math.floor (Math.random() * 2) + Math.random() + 28
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i < 200;i++) {
        let x = Math.floor(Math.random() * 15) + Math.random() + 18
        let y = Math.floor (Math.random() * 3) + Math.random() + 29
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    //under basketball net
    for (let i = 0;i < 150;i++) {
        let x = Math.floor(Math.random()*7) + Math.random() + 21
        let y = Math.floor(Math.random()*4) + Math.random() + 5
        let f = 1
        if (Math.random() < 0.3) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    for (let i = 0;i <70;i++) {
        let x = Math.floor(Math.random()*40) + Math.random() + 3
        let y = Math.floor(Math.random()*26) + Math.random() + 2
        let f = 1
        if (Math.random() < 0.4) {
            f = 0
        }
        let cur = {"x": x, "y": y, "action_type": "Jump Shot", "shot_distance": 24, "shot_made_flag": f,}
        res.push(cur)
    }

    return res;
}

const db = [
    {playerId: 203932, playerName:"Aaron Gordon", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-8", weight:235, pts:14.4, reb:7.6, ast:3.7, pie:10.1},
    {playerId: 1628988, playerName:"Aaron Holiday", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-0", weight:185, pts:9.4, reb:2.3, ast:3.3, pie:7.7},
    {playerId: 1627846, playerName:"Abdel Nader", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-5", weight:225, pts:6.0, reb:1.9, ast:0.7, pie:7.1},
    {playerId: 1629690, playerName:"Adam Mokoka", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-5", weight:190, pts:2.9, reb:0.9, ast:0.4, pie:2.3},
    {playerId: 1629678, playerName:"Admiral Schofield", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-5", weight:241, pts:3.1, reb:1.3, ast:0.5, pie:3.7},
    {playerId: 201143, playerName:"Al Horford", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-9", weight:240, pts:12.0, reb:6.9, ast:4.1, pie:11.1},
    {playerId: 202329, playerName:"Al-Farouq Aminu", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-8", weight:220, pts:4.3, reb:4.8, ast:1.2, pie:6.3},
    {playerId: 202692, playerName:"Alec Burks", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-6", weight:214, pts:15.1, reb:4.4, ast:2.9, pie:11.4},
    {playerId: 1629346, playerName:"Alen Smailagic", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-10", weight:215, pts:4.2, reb:1.9, ast:0.9, pie:8.9},
    {playerId: 1627936, playerName:"Alex Caruso", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-5", weight:186, pts:5.4, reb:1.9, ast:1.8, pie:7.5},
    {playerId: 203458, playerName:"Alex Len", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"7-0", weight:250, pts:8.3, reb:6.0, ast:1.0, pie:12.0},
    {playerId: 1628035, playerName:"Alfonzo McKinnie", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-7", weight:215, pts:4.6, reb:2.8, ast:0.4, pie:4.7},
    {playerId: 1628993, playerName:"Alize Johnson", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-7", weight:212, pts:1.4, reb:1.4, ast:0.2, pie:6.5},
    {playerId: 203459, playerName:"Allen Crabbe", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-5", weight:212, pts:4.6, reb:2.1, ast:0.9, pie:4.3},
    {playerId: 1629019, playerName:"Allonzo Trier", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-4", weight:200, pts:6.5, reb:1.2, ast:1.2, pie:9.2},
    {playerId: 1628518, playerName:"Amile Jefferson", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-9", weight:222, pts:0.8, reb:1.3, ast:0.2, pie:5.1},
    {playerId: 1629599, playerName:"Amir Coffey", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-7", weight:210, pts:2.2, reb:1.1, ast:0.7, pie:3.4},
    {playerId: 203083, playerName:"Andre Drummond", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-10", weight:279, pts:17.7, reb:15.2, ast:2.7, pie:15.3},
    {playerId: 2738, playerName:"Andre Iguodala", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-6", weight:215, pts:4.4, reb:3.8, ast:2.0, pie:7.8},
    {playerId: 203952, playerName:"Andrew Wiggins", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-7", weight:197, pts:21.8, reb:5.1, ast:3.7, pie:10.4},
    {playerId: 1629014, playerName:"Anfernee Simons", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-3", weight:181, pts:8.8, reb:2.3, ast:1.5, pie:5.7},
    {playerId: 1627790, playerName:"Ante Zizic", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-10", weight:266, pts:4.4, reb:3.0, ast:0.3, pie:10.1},
    {playerId: 203076, playerName:"Anthony Davis", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-10", weight:253, pts:26.7, reb:9.4, ast:3.1, pie:18.3},
    {playerId: 201229, playerName:"Anthony Tolliver", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-8", weight:240, pts:3.5, reb:2.8, ast:0.7, pie:4.5},
    {playerId: 1628499, playerName:"Antonius Cleveland", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-5", weight:195, pts:0.8, reb:0.5, ast:0.0, pie:1.6},
    {playerId: 1628394, playerName:"Anzejs Pasecniks", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"7-2", weight:229, pts:6.0, reb:4.1, ast:0.7, pie:6.1},
    {playerId: 203382, playerName:"Aron Baynes", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-10", weight:260, pts:11.5, reb:5.6, ast:1.6, pie:9.4},
    {playerId: 203085, playerName:"Austin Rivers", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-3", weight:200, pts:8.5, reb:2.4, ast:1.6, pie:6.0},
    {playerId: 202340, playerName:"Avery Bradley", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-3", weight:180, pts:8.6, reb:2.3, ast:1.3, pie:5.5},
    {playerId: 1629168, playerName:"BJ Johnson", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-7", weight:200, pts:1.6, reb:0.8, ast:0.3, pie:4.8},
    {playerId: 1628389, playerName:"Bam Adebayo", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-9", weight:255, pts:16.2, reb:10.5, ast:5.1, pie:14.9},
    {playerId: 203463, playerName:"Ben McLemore", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-3", weight:195, pts:9.8, reb:2.2, ast:0.9, pie:6.5},
    {playerId: 1627732, playerName:"Ben Simmons", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-10", weight:240, pts:16.7, reb:7.8, ast:8.2, pie:14.5},
    {playerId: 202687, playerName:"Bismack Biyombo", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-8", weight:255, pts:7.4, reb:5.8, ast:0.9, pie:9.7},
    {playerId: 201933, playerName:"Blake Griffin", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-9", weight:250, pts:15.5, reb:4.7, ast:3.3, pie:8.4},
    {playerId: 1626246, playerName:"Boban Marjanovic", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"7-4", weight:290, pts:6.3, reb:4.1, ast:0.4, pie:15.1},
    {playerId: 1626171, playerName:"Bobby Portis", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-10", weight:250, pts:10.1, reb:5.1, ast:1.5, pie:10.8},
    {playerId: 203992, playerName:"Bogdan Bogdanovic", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-6", weight:220, pts:14.5, reb:3.2, ast:3.2, pie:9.8},
    {playerId: 202711, playerName:"Bojan Bogdanovic", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-8", weight:226, pts:20.2, reb:4.1, ast:2.1, pie:10.5},
    {playerId: 202954, playerName:"Brad Wanamaker", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-3", weight:210, pts:6.6, reb:2.0, ast:2.5, pie:8.1},
    {playerId: 203078, playerName:"Bradley Beal", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-3", weight:207, pts:30.5, reb:4.2, ast:6.1, pie:14.3},
    {playerId: 1629634, playerName:"Brandon Clarke", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-8", weight:215, pts:12.0, reb:5.8, ast:1.4, pie:14.4},
    {playerId: 1629164, playerName:"Brandon Goodwin", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-0", weight:180, pts:6.1, reb:2.1, ast:1.5, pie:9.4},
    {playerId: 1627742, playerName:"Brandon Ingram", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-7", weight:190, pts:24.3, reb:6.3, ast:4.3, pie:13.2},
    {playerId: 202688, playerName:"Brandon Knight", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-2", weight:182, pts:7.3, reb:1.6, ast:2.8, pie:5.2},
    {playerId: 1628968, playerName:"Brian Bowen II", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-6", weight:190, pts:0.8, reb:1.4, ast:0.0, pie:0.9},
    {playerId: 201572, playerName:"Brook Lopez", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"7-0", weight:282, pts:11.0, reb:4.5, ast:1.6, pie:8.2},
    {playerId: 1628971, playerName:"Bruce Brown", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-4", weight:202, pts:8.9, reb:4.7, ast:4.0, pie:8.3},
    {playerId: 203998, playerName:"Bruno Caboclo", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-9", weight:218, pts:2.7, reb:2.0, ast:0.4, pie:7.6},
    {playerId: 1628981, playerName:"Bruno Fernando", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-9", weight:240, pts:4.3, reb:3.5, ast:0.9, pie:7.9},
    {playerId: 1627854, playerName:"Bryn Forbes", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-2", weight:205, pts:11.2, reb:2.0, ast:1.7, pie:6.4},
    {playerId: 1627741, playerName:"Buddy Hield", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-4", weight:220, pts:19.8, reb:4.8, ast:3.1, pie:10.6},
    {playerId: 203468, playerName:"CJ McCollum", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-3", weight:190, pts:22.5, reb:4.1, ast:4.3, pie:10.5},
    {playerId: 101139, playerName:"CJ Miles", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-6", weight:220, pts:6.4, reb:1.2, ast:1.2, pie:4.8},
    {playerId: 1628997, playerName:"Caleb Martin", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-5", weight:205, pts:6.2, reb:2.1, ast:1.3, pie:7.7},
    {playerId: 1628403, playerName:"Caleb Swanigan", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-9", weight:260, pts:2.4, reb:3.7, ast:1.1, pie:5.4},
    {playerId: 1629629, playerName:"Cam Reddish", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-8", weight:218, pts:10.5, reb:3.7, ast:1.5, pie:5.9},
    {playerId: 1629661, playerName:"Cameron Johnson", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-8", weight:210, pts:8.1, reb:2.9, ast:1.1, pie:7.8},
    {playerId: 1627747, playerName:"Caris LeVert", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-6", weight:205, pts:17.7, reb:4.1, ast:4.1, pie:10.5},
    {playerId: 2546, playerName:"Carmelo Anthony", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-8", weight:238, pts:15.3, reb:6.3, ast:1.6, pie:7.8},
    {playerId: 1629035, playerName:"Carsen Edwards", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"5-11", weight:200, pts:3.0, reb:1.2, ast:0.6, pie:5.1},
    {playerId: 1626224, playerName:"Cedi Osman", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-7", weight:230, pts:11.0, reb:3.6, ast:2.4, pie:6.5},
    {playerId: 1628990, playerName:"Chandler Hutchison", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-7", weight:210, pts:7.8, reb:3.9, ast:0.9, pie:8.6},
    {playerId: 202718, playerName:"Chandler Parsons", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-9", weight:230, pts:2.8, reb:1.4, ast:0.6, pie:3.8},
    {playerId: 1629718, playerName:"Charles Brown Jr.", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-6", weight:199, pts:2.0, reb:0.4, ast:0.2, pie:7.8},
    {playerId: 1626184, playerName:"Chasson Randle", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-2", weight:185, pts:1.7, reb:0.7, ast:1.7, pie:3.4},
    {playerId: 1627767, playerName:"Cheick Diallo", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-8", weight:219, pts:4.8, reb:2.9, ast:0.5, pie:12.1},
    {playerId: 1629002, playerName:"Chimezie Metu", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-9", weight:225, pts:2.9, reb:1.6, ast:0.4, pie:18.6},
    {playerId: 1628449, playerName:"Chris Boucher", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-9", weight:200, pts:6.3, reb:4.4, ast:0.4, pie:12.3},
    {playerId: 1629185, playerName:"Chris Chiozza", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"5-11", weight:175, pts:4.0, reb:1.7, ast:2.3, pie:10.8},
    {playerId: 1629598, playerName:"Chris Clemons", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"5-9", weight:180, pts:4.9, reb:0.8, ast:0.8, pie:8.1},
    {playerId: 101108, playerName:"Chris Paul", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-1", weight:175, pts:17.7, reb:4.9, ast:6.8, pie:15.1},
    {playerId: 1629735, playerName:"Chris Silva", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-8", weight:234, pts:2.9, reb:2.7, ast:0.5, pie:8.0},
    {playerId: 1626174, playerName:"Christian Wood", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-10", weight:214, pts:13.1, reb:6.3, ast:1.0, pie:15.3},
    {playerId: 203991, playerName:"Clint Capela", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-10", weight:240, pts:13.9, reb:13.8, ast:1.2, pie:14.3},
    {playerId: 1629632, playerName:"Coby White", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-4", weight:195, pts:13.2, reb:3.5, ast:2.7, pie:8.7},
    {playerId: 1628998, playerName:"Cody Martin", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-5", weight:205, pts:5.0, reb:3.3, ast:2.0, pie:7.6},
    {playerId: 203469, playerName:"Cody Zeller", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"7-0", weight:240, pts:11.1, reb:7.1, ast:1.5, pie:11.4},
    {playerId: 1629012, playerName:"Collin Sexton", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-1", weight:190, pts:20.8, reb:3.1, ast:3.0, pie:9.5},
    {playerId: 202709, playerName:"Cory Joseph", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-3", weight:200, pts:6.3, reb:2.5, ast:3.4, pie:7.0},
    {playerId: 201584, playerName:"Courtney Lee", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-5", weight:215, pts:4.5, reb:1.3, ast:0.5, pie:5.2},
    {playerId: 1626245, playerName:"Cristiano Felicio", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-10", weight:270, pts:3.9, reb:4.6, ast:0.7, pie:6.7},
    {playerId: 1626156, playerName:"D'Angelo Russell", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-4", weight:193, pts:23.1, reb:3.9, ast:6.3, pie:12.5},
    {playerId: 201571, playerName:"D.J. Augustin", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"5-11", weight:183, pts:10.4, reb:2.2, ast:4.6, pie:10.5},
    {playerId: 1628391, playerName:"D.J. Wilson", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-10", weight:231, pts:3.2, reb:2.2, ast:0.7, pie:7.6},
    {playerId: 1629610, playerName:"DaQuan Jeffries", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-5", weight:230, pts:1.2, reb:0.2, ast:0.2, pie:3.4},
    {playerId: 1627745, playerName:"Damian Jones", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-11", weight:245, pts:5.6, reb:3.7, ast:0.6, pie:8.0},
    {playerId: 203081, playerName:"Damian Lillard", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-2", weight:195, pts:28.9, reb:4.3, ast:7.8, pie:16.5},
    {playerId: 1627814, playerName:"Damion Lee", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-5", weight:210, pts:12.7, reb:4.9, ast:2.7, pie:8.9},
    {playerId: 1628422, playerName:"Damyean Dotson", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-5", weight:210, pts:6.7, reb:1.9, ast:1.2, pie:7.9},
    {playerId: 1629655, playerName:"Daniel Gafford", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-10", weight:234, pts:5.1, reb:2.5, ast:0.5, pie:7.6},
    {playerId: 1628464, playerName:"Daniel Theis", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-8", weight:245, pts:9.3, reb:6.6, ast:1.6, pie:10.7},
    {playerId: 201568, playerName:"Danilo Gallinari", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-10", weight:233, pts:19.2, reb:5.5, ast:2.1, pie:13.0},
    {playerId: 201980, playerName:"Danny Green", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-6", weight:215, pts:8.2, reb:3.4, ast:1.4, pie:6.6},
    {playerId: 203957, playerName:"Dante Exum", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-5", weight:214, pts:4.5, reb:1.9, ast:1.1, pie:7.5},
    {playerId: 1627863, playerName:"Danuel House Jr.", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-6", weight:220, pts:10.2, reb:4.2, ast:1.3, pie:7.0},
    {playerId: 203967, playerName:"Dario Saric", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-10", weight:225, pts:10.1, reb:5.9, ast:1.9, pie:9.3},
    {playerId: 1629647, playerName:"Darius Bazley", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-8", weight:208, pts:4.5, reb:3.7, ast:0.5, pie:7.7},
    {playerId: 1629636, playerName:"Darius Garland", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-1", weight:192, pts:12.3, reb:1.9, ast:3.9, pie:5.7},
    {playerId: 1629133, playerName:"Daryl Macon", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-2", weight:185, pts:0.8, reb:0.0, ast:0.3, pie:-2.8},
    {playerId: 1628021, playerName:"David Nwaba", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-5", weight:219, pts:5.2, reb:2.3, ast:0.4, pie:9.8},
    {playerId: 202722, playerName:"Davis Bertans", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-10", weight:225, pts:15.4, reb:4.5, ast:1.7, pie:9.4},
    {playerId: 1628368, playerName:"De'Aaron Fox", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-3", weight:185, pts:20.4, reb:4.0, ast:6.8, pie:12.3},
    {playerId: 1629631, playerName:"De'Andre Hunter", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-7", weight:225, pts:12.3, reb:4.5, ast:1.8, pie:5.8},
    {playerId: 1629001, playerName:"De'Anthony Melton", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-2", weight:200, pts:8.1, reb:3.7, ast:3.0, pie:10.0},
    {playerId: 201599, playerName:"DeAndre Jordan", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-11", weight:265, pts:8.3, reb:10.0, ast:1.9, pie:16.8},
    {playerId: 1627761, playerName:"DeAndre' Bembry", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-5", weight:210, pts:5.8, reb:3.5, ast:1.9, pie:6.9},
    {playerId: 201942, playerName:"DeMar DeRozan", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-6", weight:220, pts:22.2, reb:5.6, ast:5.6, pie:13.9},
    {playerId: 201960, playerName:"DeMarre Carroll", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-6", weight:215, pts:3.5, reb:2.2, ast:0.9, pie:5.4},
    {playerId: 1629731, playerName:"Dean Wade", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-9", weight:228, pts:1.7, reb:1.6, ast:0.2, pie:8.9},
    {playerId: 1629028, playerName:"Deandre Ayton", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-11", weight:250, pts:19.0, reb:12.0, ast:1.9, pie:14.1},
    {playerId: 1627749, playerName:"Dejounte Murray", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-4", weight:180, pts:10.7, reb:5.8, ast:4.1, pie:11.4},
    {playerId: 1626153, playerName:"Delon Wright", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-5", weight:185, pts:7.3, reb:4.0, ast:3.4, pie:11.0},
    {playerId: 203471, playerName:"Dennis Schroder", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-1", weight:172, pts:19.0, reb:3.7, ast:4.1, pie:12.2},
    {playerId: 1628372, playerName:"Dennis Smith Jr.", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-2", weight:205, pts:5.5, reb:2.3, ast:2.9, pie:4.9},
    {playerId: 1627756, playerName:"Denzel Valentine", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-4", weight:220, pts:6.8, reb:2.1, ast:1.2, pie:9.4},
    {playerId: 1629126, playerName:"Deonte Burton", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-4", weight:240, pts:2.8, reb:1.4, ast:0.3, pie:4.3},
    {playerId: 202324, playerName:"Derrick Favors", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-9", weight:265, pts:9.2, reb:9.9, ast:1.7, pie:13.0},
    {playerId: 1627884, playerName:"Derrick Jones Jr.", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-6", weight:210, pts:8.9, reb:4.2, ast:1.1, pie:8.7},
    {playerId: 201565, playerName:"Derrick Rose", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-2", weight:200, pts:18.1, reb:2.4, ast:5.6, pie:14.0},
    {playerId: 1628476, playerName:"Derrick Walton Jr.", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-0", weight:185, pts:2.0, reb:0.6, ast:1.0, pie:5.8},
    {playerId: 1628401, playerName:"Derrick White", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-4", weight:190, pts:10.4, reb:3.2, ast:3.4, pie:9.8},
    {playerId: 1626164, playerName:"Devin Booker", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-5", weight:206, pts:26.1, reb:4.2, ast:6.6, pie:13.5},
    {playerId: 1628985, playerName:"Devon Hall", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-5", weight:215, pts:1.0, reb:0.2, ast:0.6, pie:2.7},
    {playerId: 1628984, playerName:"Devonte' Graham", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-1", weight:195, pts:18.2, reb:3.4, ast:7.5, pie:10.9},
    {playerId: 1629608, playerName:"Dewan Hernandez", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-10", weight:235, pts:1.0, reb:1.8, ast:0.0, pie:0.0},
    {playerId: 203473, playerName:"Dewayne Dedmon", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"7-0", weight:245, pts:5.8, reb:5.7, ast:0.5, pie:6.5},
    {playerId: 1628415, playerName:"Dillon Brooks", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-7", weight:225, pts:15.7, reb:3.3, ast:2.0, pie:6.0},
    {playerId: 203079, playerName:"Dion Waiters", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-3", weight:210, pts:9.3, reb:3.7, ast:1.0, pie:10.7},
    {playerId: 1627734, playerName:"Domantas Sabonis", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-11", weight:240, pts:18.5, reb:12.4, ast:5.0, pie:15.6},
    {playerId: 1628378, playerName:"Donovan Mitchell", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-1", weight:215, pts:24.2, reb:4.4, ast:4.2, pie:12.6},
    {playerId: 1629743, playerName:"Donta Hall", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-9", weight:229, pts:1.5, reb:3.8, ast:0.5, pie:3.4},
    {playerId: 1628978, playerName:"Donte DiVincenzo", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-4", weight:203, pts:9.4, reb:4.9, ast:2.3, pie:10.9},
    {playerId: 1627827, playerName:"Dorian Finney-Smith", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-7", weight:220, pts:9.3, reb:5.5, ast:1.5, pie:7.1},
    {playerId: 203926, playerName:"Doug McDermott", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-7", weight:225, pts:10.4, reb:2.5, ast:1.1, pie:9.2},
    {playerId: 1627733, playerName:"Dragan Bender", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"7-0", weight:249, pts:6.7, reb:4.6, ast:1.8, pie:7.9},
    {playerId: 203110, playerName:"Draymond Green", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-6", weight:230, pts:8.0, reb:6.2, ast:6.2, pie:10.0},
    {playerId: 1629234, playerName:"Drew Eubanks", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-9", weight:245, pts:3.6, reb:2.5, ast:0.4, pie:8.8},
    {playerId: 1629130, playerName:"Duncan Robinson", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-7", weight:215, pts:13.3, reb:3.3, ast:1.4, pie:7.9},
    {playerId: 1628605, playerName:"Dusty Hannahs", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-3", weight:210, pts:6.0, reb:0.5, ast:0.0, pie:8.0},
    {playerId: 1628407, playerName:"Dwayne Bacon", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-6", weight:221, pts:5.7, reb:2.6, ast:1.3, pie:4.9},
    {playerId: 2730, playerName:"Dwight Howard", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-10", weight:265, pts:7.5, reb:7.4, ast:0.7, pie:11.4},
    {playerId: 203939, playerName:"Dwight Powell", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-10", weight:240, pts:9.4, reb:5.7, ast:1.5, pie:9.4},
    {playerId: 1629058, playerName:"Dzanan Musa", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-9", weight:217, pts:4.2, reb:2.0, ast:0.9, pie:6.6},
    {playerId: 202734, playerName:"E'Twaun Moore", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-3", weight:191, pts:8.6, reb:2.4, ast:1.4, pie:7.2},
    {playerId: 202334, playerName:"Ed Davis", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-9", weight:218, pts:1.3, reb:3.8, ast:0.3, pie:4.8},
    {playerId: 1628410, playerName:"Edmond Sumner", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-4", weight:196, pts:4.6, reb:1.5, ast:1.6, pie:5.6},
    {playerId: 203901, playerName:"Elfrid Payton", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-3", weight:195, pts:10.0, reb:4.7, ast:7.2, pie:11.1},
    {playerId: 1629059, playerName:"Elie Okobo", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-3", weight:190, pts:4.0, reb:1.6, ast:2.1, pie:7.7},
    {playerId: 1626144, playerName:"Emmanuel Mudiay", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-3", weight:200, pts:7.3, reb:2.4, ast:2.2, pie:10.0},
    {playerId: 202683, playerName:"Enes Kanter", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-10", weight:250, pts:8.2, reb:7.7, ast:1.0, pie:15.5},
    {playerId: 202339, playerName:"Eric Bledsoe", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-1", weight:214, pts:15.4, reb:4.6, ast:5.4, pie:12.8},
    {playerId: 201569, playerName:"Eric Gordon", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-3", weight:215, pts:14.5, reb:1.9, ast:1.5, pie:5.6},
    {playerId: 1628450, playerName:"Eric Mika", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-10", weight:233, pts:6.0, reb:7.0, ast:0.0, pie:7.7},
    {playerId: 1629672, playerName:"Eric Paschall", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-6", weight:255, pts:14.0, reb:4.6, ast:2.1, pie:9.6},
    {playerId: 101141, playerName:"Ersan Ilyasova", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-9", weight:235, pts:6.8, reb:4.9, ast:0.8, pie:10.6},
    {playerId: 203095, playerName:"Evan Fournier", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-7", weight:205, pts:18.8, reb:2.6, ast:3.2, pie:9.9},
    {playerId: 202323, playerName:"Evan Turner", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-6", weight:220, pts:3.3, reb:2.0, ast:2.0, pie:6.2},
    {playerId: 1628402, playerName:"Frank Jackson", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-3", weight:205, pts:5.6, reb:1.4, ast:0.8, pie:4.3},
    {playerId: 1626163, playerName:"Frank Kaminsky", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"7-0", weight:240, pts:11.0, reb:4.9, ast:2.2, pie:10.2},
    {playerId: 1628412, playerName:"Frank Mason", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"5-11", weight:190, pts:2.3, reb:1.3, ast:1.8, pie:3.9},
    {playerId: 1628373, playerName:"Frank Ntilikina", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-4", weight:200, pts:6.3, reb:2.1, ast:3.0, pie:6.3},
    {playerId: 1627832, playerName:"Fred VanVleet", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-1", weight:197, pts:17.6, reb:3.8, ast:6.6, pie:11.2},
    {playerId: 1627788, playerName:"Furkan Korkmaz", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-7", weight:202, pts:9.7, reb:2.3, ast:1.1, pie:7.7},
    {playerId: 1629216, playerName:"Gabe Vincent", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-3", weight:200, pts:2.0, reb:0.5, ast:0.5, pie:1.5},
    {playerId: 202066, playerName:"Garrett Temple", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-5", weight:195, pts:10.3, reb:3.5, ast:2.6, pie:7.6},
    {playerId: 1629726, playerName:"Garrison Mathews", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-5", weight:215, pts:5.4, reb:1.3, ast:0.6, pie:7.8},
    {playerId: 1629109, playerName:"Gary Clark", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-6", weight:225, pts:3.2, reb:2.4, ast:0.4, pie:6.5},
    {playerId: 203914, playerName:"Gary Harris", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-4", weight:210, pts:10.4, reb:2.9, ast:2.1, pie:6.2},
    {playerId: 1627780, playerName:"Gary Payton II", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-3", weight:195, pts:3.9, reb:2.8, ast:1.7, pie:6.9},
    {playerId: 1629018, playerName:"Gary Trent Jr.", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-5", weight:209, pts:7.7, reb:1.7, ast:0.9, pie:6.6},
    {playerId: 201588, playerName:"George Hill", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-3", weight:188, pts:9.6, reb:3.0, ast:2.9, pie:11.9},
    {playerId: 1627777, playerName:"Georges Niang", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-7", weight:230, pts:5.8, reb:1.9, ast:0.6, pie:8.6},
    {playerId: 203507, playerName:"Giannis Antetokounmpo", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-11", weight:242, pts:29.6, reb:13.7, ast:5.8, pie:23.9},
    {playerId: 203922, playerName:"Glenn Robinson III", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-6", weight:222, pts:11.8, reb:4.3, ast:1.6, pie:8.4},
    {playerId: 1629048, playerName:"Goga Bitadze", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-11", weight:250, pts:3.1, reb:2.0, ast:0.4, pie:7.5},
    {playerId: 201609, playerName:"Goran Dragic", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-3", weight:190, pts:16.1, reb:3.1, ast:5.1, pie:11.1},
    {playerId: 202330, playerName:"Gordon Hayward", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-7", weight:225, pts:17.3, reb:6.5, ast:4.1, pie:13.3},
    {playerId: 203476, playerName:"Gorgui Dieng", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-10", weight:252, pts:7.4, reb:5.8, ast:1.2, pie:13.5},
    {playerId: 1629684, playerName:"Grant Williams", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-6", weight:236, pts:3.5, reb:2.7, ast:1.0, pie:3.9},
    {playerId: 1628960, playerName:"Grayson Allen", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-4", weight:198, pts:7.4, reb:2.2, ast:1.4, pie:8.2},
    {playerId: 1628977, playerName:"Hamidou Diallo", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-5", weight:202, pts:6.1, reb:3.2, ast:0.6, pie:5.3},
    {playerId: 203084, playerName:"Harrison Barnes", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-8", weight:225, pts:14.7, reb:4.8, ast:2.4, pie:9.0},
    {playerId: 1628385, playerName:"Harry Giles III", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-11", weight:240, pts:7.0, reb:4.2, ast:1.3, pie:10.3},
    {playerId: 202355, playerName:"Hassan Whiteside", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"7-0", weight:265, pts:16.3, reb:14.2, ast:1.2, pie:16.0},
    {playerId: 1627740, playerName:"Henry Ellenson", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-10", weight:240, pts:0.4, reb:1.2, ast:0.2, pie:4.1},
    {playerId: 101133, playerName:"Ian Mahinmi", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-11", weight:262, pts:7.4, reb:5.7, ast:1.3, pie:7.8},
    {playerId: 1629649, playerName:"Ignas Brazdeikis", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-6", weight:221, pts:1.9, reb:0.6, ast:0.4, pie:1.8},
    {playerId: 202697, playerName:"Iman Shumpert", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-5", weight:212, pts:4.2, reb:2.6, ast:0.9, pie:3.9},
    {playerId: 1629067, playerName:"Isaac Bonga", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-8", weight:180, pts:4.6, reb:3.2, ast:1.1, pie:6.2},
    {playerId: 1628392, playerName:"Isaiah Hartenstein", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"7-0", weight:250, pts:4.7, reb:3.9, ast:0.8, pie:11.8},
    {playerId: 1629676, playerName:"Isaiah Roby", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-8", weight:230, pts:0.0, reb:0.7, ast:0.0, pie:-2.0},
    {playerId: 202738, playerName:"Isaiah Thomas", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"5-9", weight:185, pts:12.2, reb:1.7, ast:3.7, pie:7.0},
    {playerId: 202397, playerName:"Ish Smith", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-0", weight:175, pts:10.5, reb:3.2, ast:4.8, pie:9.9},
    {playerId: 1627826, playerName:"Ivica Zubac", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"7-0", weight:240, pts:8.0, reb:7.2, ast:1.1, pie:13.9},
    {playerId: 200826, playerName:"J.J. Barea", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"5-10", weight:180, pts:7.5, reb:1.8, ast:3.8, pie:10.7},
    {playerId: 1629122, playerName:"J.P. Macura", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-4", weight:203, pts:0.0, reb:0.0, ast:0.0, pie:0.0},
    {playerId: 200755, playerName:"JJ Redick", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-3", weight:200, pts:14.9, reb:2.6, ast:2.0, pie:9.6},
    {playerId: 1629630, playerName:"Ja Morant", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-3", weight:174, pts:17.6, reb:3.5, ast:6.9, pie:13.1},
    {playerId: 203960, playerName:"JaKarr Sampson", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-7", weight:214, pts:4.2, reb:2.3, ast:0.3, pie:6.5},
    {playerId: 203210, playerName:"JaMychal Green", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-8", weight:227, pts:6.5, reb:6.3, ast:0.8, pie:8.2},
    {playerId: 201580, playerName:"JaVale McGee", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"7-0", weight:270, pts:6.8, reb:5.8, ast:0.6, pie:11.6},
    {playerId: 203953, playerName:"Jabari Parker", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-8", weight:245, pts:14.7, reb:5.9, ast:1.8, pie:10.8},
    {playerId: 1628980, playerName:"Jacob Evans", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-4", weight:210, pts:4.4, reb:1.4, ast:1.1, pie:3.3},
    {playerId: 203109, playerName:"Jae Crowder", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-6", weight:235, pts:10.4, reb:6.1, ast:2.6, pie:8.7},
    {playerId: 1626143, playerName:"Jahlil Okafor", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-10", weight:270, pts:7.6, reb:4.3, ast:1.3, pie:10.5},
    {playerId: 1627774, playerName:"Jake Layman", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-8", weight:209, pts:9.1, reb:2.5, ast:0.7, pie:5.9},
    {playerId: 1627751, playerName:"Jakob Poeltl", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"7-1", weight:245, pts:5.3, reb:5.3, ast:1.8, pie:11.2},
    {playerId: 1628973, playerName:"Jalen Brunson", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-1", weight:190, pts:8.2, reb:2.4, ast:3.3, pie:10.7},
    {playerId: 1629665, playerName:"Jalen Lecque", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-4", weight:185, pts:2.5, reb:0.0, ast:0.5, pie:2.8},
    {playerId: 1629667, playerName:"Jalen McDaniels", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-10", weight:205, pts:5.6, reb:4.1, ast:0.8, pie:7.5},
    {playerId: 1627750, playerName:"Jamal Murray", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-4", weight:215, pts:18.8, reb:3.9, ast:4.8, pie:12.0},
    {playerId: 203516, playerName:"James Ennis III", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-6", weight:215, pts:6.0, reb:3.3, ast:0.9, pie:6.7},
    {playerId: 201935, playerName:"James Harden", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-5", weight:220, pts:34.4, reb:6.4, ast:7.4, pie:18.3},
    {playerId: 201949, playerName:"James Johnson", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-7", weight:240, pts:8.4, reb:3.7, ast:2.3, pie:8.6},
    {playerId: 201162, playerName:"Jared Dudley", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-6", weight:237, pts:1.5, reb:1.1, ast:0.5, pie:5.6},
    {playerId: 1629607, playerName:"Jared Harper", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"5-10", weight:175, pts:0.7, reb:0.0, ast:0.0, pie:-2.6},
    {playerId: 1628991, playerName:"Jaren Jackson Jr.", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-11", weight:242, pts:16.9, reb:4.7, ast:1.4, pie:8.8},
    {playerId: 1629020, playerName:"Jarred Vanderbilt", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-9", weight:214, pts:1.1, reb:0.8, ast:0.2, pie:4.9},
    {playerId: 1629714, playerName:"Jarrell Brantley", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-5", weight:250, pts:0.0, reb:1.0, ast:0.2, pie:6.6},
    {playerId: 1628386, playerName:"Jarrett Allen", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-11", weight:243, pts:10.6, reb:9.5, ast:1.3, pie:13.8},
    {playerId: 1629633, playerName:"Jarrett Culver", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-6", weight:195, pts:9.2, reb:3.4, ast:1.7, pie:5.5},
    {playerId: 1627784, playerName:"Jarrod Uthoff", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-9", weight:220, pts:1.0, reb:0.3, ast:0.0, pie:-3.1},
    {playerId: 1629750, playerName:"Javonte Green", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-4", weight:205, pts:2.9, reb:1.8, ast:0.5, pie:8.3},
    {playerId: 1629637, playerName:"Jaxson Hayes", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-11", weight:220, pts:7.5, reb:4.0, ast:0.9, pie:9.5},
    {playerId: 1627759, playerName:"Jaylen Brown", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-6", weight:223, pts:20.4, reb:6.4, ast:2.2, pie:11.4},
    {playerId: 1629658, playerName:"Jaylen Hoard", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-8", weight:216, pts:2.9, reb:2.5, ast:0.3, pie:8.8},
    {playerId: 1629669, playerName:"Jaylen Nowell", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-4", weight:201, pts:3.8, reb:0.9, ast:1.3, pie:8.0},
    {playerId: 1628369, playerName:"Jayson Tatum", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-8", weight:210, pts:23.6, reb:7.1, ast:2.9, pie:14.3},
    {playerId: 201145, playerName:"Jeff Green", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-8", weight:235, pts:8.4, reb:2.8, ast:0.8, pie:8.3},
    {playerId: 201952, playerName:"Jeff Teague", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-3", weight:195, pts:10.9, reb:2.4, ast:5.2, pie:10.0},
    {playerId: 203924, playerName:"Jerami Grant", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-8", weight:210, pts:11.6, reb:3.5, ast:1.2, pie:8.3},
    {playerId: 1629725, playerName:"Jeremiah Martin", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-2", weight:185, pts:0.7, reb:0.7, ast:0.7, pie:5.6},
    {playerId: 203087, playerName:"Jeremy Lamb", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-5", weight:180, pts:12.5, reb:4.3, ast:2.1, pie:9.5},
    {playerId: 202951, playerName:"Jeremy Pargo", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-2", weight:219, pts:8.3, reb:1.0, ast:2.7, pie:7.0},
    {playerId: 1629010, playerName:"Jerome Robinson", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-4", weight:190, pts:3.7, reb:1.9, ast:1.2, pie:4.4},
    {playerId: 1628975, playerName:"Jevon Carter", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-1", weight:200, pts:4.6, reb:2.0, ast:1.3, pie:6.8},
    {playerId: 202710, playerName:"Jimmy Butler", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-7", weight:230, pts:20.2, reb:6.6, ast:6.1, pie:15.7},
    {playerId: 1629147, playerName:"Joe Chealey", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-4", weight:190, pts:0.5, reb:0.0, ast:0.3, pie:-4.0},
    {playerId: 203925, playerName:"Joe Harris", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-6", weight:220, pts:13.9, reb:4.3, ast:2.1, pie:8.6},
    {playerId: 204060, playerName:"Joe Ingles", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-7", weight:220, pts:9.8, reb:4.0, ast:5.2, pie:9.6},
    {playerId: 203954, playerName:"Joel Embiid", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"7-0", weight:280, pts:23.4, reb:11.8, ast:3.1, pie:19.7},
    {playerId: 1628381, playerName:"John Collins", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-9", weight:235, pts:21.6, reb:10.1, ast:1.5, pie:15.2},
    {playerId: 203089, playerName:"John Henson", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-9", weight:219, pts:5.5, reb:4.1, ast:1.4, pie:10.8},
    {playerId: 1629723, playerName:"John Konchar", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-5", weight:210, pts:3.4, reb:3.1, ast:1.4, pie:13.8},
    {playerId: 1628405, playerName:"Johnathan Motley", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-8", weight:230, pts:2.2, reb:0.8, ast:0.6, pie:17.2},
    {playerId: 1629140, playerName:"Johnathan Williams", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-9", weight:228, pts:3.2, reb:3.9, ast:0.5, pie:11.0},
    {playerId: 1628413, playerName:"Jonah Bolden", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-8", weight:225, pts:1.4, reb:1.3, ast:0.0, pie:0.3},
    {playerId: 202685, playerName:"Jonas Valanciunas", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-11", weight:265, pts:14.9, reb:11.2, ast:1.8, pie:16.2},
    {playerId: 1628371, playerName:"Jonathan Isaac", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-11", weight:230, pts:12.0, reb:6.9, ast:1.4, pie:10.5},
    {playerId: 1628395, playerName:"Jordan Bell", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-8", weight:216, pts:3.2, reb:2.8, ast:0.6, pie:9.6},
    {playerId: 1629648, playerName:"Jordan Bone", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-3", weight:180, pts:1.2, reb:0.4, ast:0.8, pie:1.1},
    {playerId: 203903, playerName:"Jordan Clarkson", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-4", weight:194, pts:15.1, reb:2.7, ast:2.0, pie:10.9},
    {playerId: 1629162, playerName:"Jordan McLaughlin", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"5-11", weight:185, pts:7.6, reb:1.6, ast:4.2, pie:11.0},
    {playerId: 203895, playerName:"Jordan McRae", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-5", weight:179, pts:11.5, reb:3.4, ast:2.5, pie:9.3},
    {playerId: 1629673, playerName:"Jordan Poole", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-4", weight:194, pts:8.8, reb:2.1, ast:2.4, pie:5.1},
    {playerId: 1627982, playerName:"Josh Gray", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-0", weight:180, pts:1.0, reb:1.0, ast:1.0, pie:-2.4},
    {playerId: 1628404, playerName:"Josh Hart", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-5", weight:215, pts:10.2, reb:6.5, ast:1.6, pie:8.8},
    {playerId: 1628367, playerName:"Josh Jackson", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-8", weight:207, pts:10.4, reb:3.2, ast:1.7, pie:8.8},
    {playerId: 203705, playerName:"Josh Magette", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-1", weight:160, pts:1.5, reb:0.8, ast:0.6, pie:5.7},
    {playerId: 1629006, playerName:"Josh Okogie", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-4", weight:213, pts:8.6, reb:4.3, ast:1.6, pie:7.0},
    {playerId: 1629729, playerName:"Josh Reaves", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-4", weight:214, pts:0.0, reb:0.0, ast:0.0, pie:-33.3},
    {playerId: 1626196, playerName:"Josh Richardson", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-5", weight:200, pts:13.8, reb:3.4, ast:3.1, pie:8.1},
    {playerId: 201950, playerName:"Jrue Holiday", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-3", weight:205, pts:19.6, reb:4.9, ast:6.9, pie:11.7},
    {playerId: 1629308, playerName:"Juan Toscano-Anderson", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-6", weight:209, pts:5.3, reb:4.0, ast:2.0, pie:7.4},
    {playerId: 1627823, playerName:"Juancho Hernangomez", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-9", weight:214, pts:6.0, reb:4.1, ast:0.8, pie:7.2},
    {playerId: 203944, playerName:"Julius Randle", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-8", weight:250, pts:19.5, reb:9.7, ast:3.1, pie:13.1},
    {playerId: 1626147, playerName:"Justin Anderson", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-5", weight:231, pts:1.0, reb:0.7, ast:0.0, pie:-4.7},
    {playerId: 203200, playerName:"Justin Holiday", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-6", weight:180, pts:8.4, reb:3.2, ast:1.3, pie:7.8},
    {playerId: 1628382, playerName:"Justin Jackson", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-7", weight:220, pts:5.7, reb:2.4, ast:0.8, pie:6.5},
    {playerId: 1629713, playerName:"Justin James", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-7", weight:190, pts:2.5, reb:0.9, ast:0.5, pie:7.9},
    {playerId: 1628383, playerName:"Justin Patton", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-11", weight:241, pts:1.8, reb:1.0, ast:0.4, pie:2.9},
    {playerId: 1629620, playerName:"Justin Robinson", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-1", weight:195, pts:1.4, reb:0.6, ast:0.8, pie:7.7},
    {playerId: 1629625, playerName:"Justin Wright-Foreman", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-0", weight:190, pts:0.0, reb:0.0, ast:0.0, pie:0.0},
    {playerId: 1626159, playerName:"Justise Winslow", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-6", weight:222, pts:11.3, reb:6.6, ast:4.0, pie:7.4},
    {playerId: 1629752, playerName:"Juwan Morgan", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-7", weight:232, pts:1.2, reb:1.2, ast:0.1, pie:8.1},
    {playerId: 1629644, playerName:"KZ Okpala", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-8", weight:215, pts:1.4, reb:1.0, ast:0.2, pie:10.3},
    {playerId: 1628443, playerName:"Kadeem Allen", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-1", weight:200, pts:5.0, reb:0.9, ast:2.1, pie:8.7},
    {playerId: 1626157, playerName:"Karl-Anthony Towns", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-11", weight:248, pts:26.5, reb:10.8, ast:4.4, pie:16.8},
    {playerId: 202695, playerName:"Kawhi Leonard", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-7", weight:225, pts:26.9, reb:7.3, ast:5.0, pie:19.3},
    {playerId: 1628966, playerName:"Keita Bates-Diop", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-8", weight:229, pts:6.6, reb:2.9, ast:0.8, pie:8.8},
    {playerId: 1629103, playerName:"Kelan Martin", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-5", weight:230, pts:6.4, reb:3.1, ast:0.7, pie:7.7},
    {playerId: 1629640, playerName:"Keldon Johnson", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-5", weight:220, pts:4.6, reb:1.9, ast:0.7, pie:9.5},
    {playerId: 203482, playerName:"Kelly Olynyk", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-11", weight:240, pts:7.7, reb:4.4, ast:1.6, pie:10.3},
    {playerId: 1626162, playerName:"Kelly Oubre Jr.", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-7", weight:203, pts:18.7, reb:6.4, ast:1.5, pie:9.7},
    {playerId: 202689, playerName:"Kemba Walker", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-0", weight:184, pts:21.2, reb:4.1, ast:4.9, pie:13.2},
    {playerId: 1629134, playerName:"Kendrick Nunn", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-2", weight:190, pts:15.6, reb:2.7, ast:3.4, pie:8.9},
    {playerId: 1629026, playerName:"Kenrich Williams", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-6", weight:210, pts:3.8, reb:5.1, ast:1.5, pie:5.4},
    {playerId: 203145, playerName:"Kent Bazemore", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-4", weight:195, pts:8.7, reb:4.3, ast:1.3, pie:6.4},
    {playerId: 203484, playerName:"Kentavious Caldwell-Pope", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-5", weight:204, pts:9.5, reb:2.1, ast:1.7, pie:6.8},
    {playerId: 1628987, playerName:"Kevin Hervey", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-9", weight:230, pts:0.3, reb:0.3, ast:0.1, pie:-11.4},
    {playerId: 1628989, playerName:"Kevin Huerter", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-7", weight:190, pts:12.2, reb:4.1, ast:3.8, pie:7.8},
    {playerId: 1628995, playerName:"Kevin Knox II", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-7", weight:215, pts:6.4, reb:2.8, ast:0.9, pie:5.6},
    {playerId: 201567, playerName:"Kevin Love", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-8", weight:251, pts:17.6, reb:9.8, ast:3.2, pie:14.0},
    {playerId: 1629645, playerName:"Kevin Porter Jr.", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-4", weight:203, pts:10.0, reb:3.2, ast:2.2, pie:6.9},
    {playerId: 1626172, playerName:"Kevon Looney", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-9", weight:222, pts:3.4, reb:3.3, ast:1.0, pie:5.6},
    {playerId: 203920, playerName:"Khem Birch", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-9", weight:233, pts:3.8, reb:4.5, ast:0.9, pie:6.1},
    {playerId: 203114, playerName:"Khris Middleton", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-7", weight:222, pts:21.1, reb:6.2, ast:4.1, pie:15.5},
    {playerId: 1629017, playerName:"Khyri Thomas", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-3", weight:210, pts:2.1, reb:0.1, ast:0.4, pie:-1.3},
    {playerId: 1628961, playerName:"Kostas Antetokounmpo", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-10", weight:200, pts:0.0, reb:0.3, ast:0.3, pie:7.3},
    {playerId: 1627739, playerName:"Kris Dunn", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-3", weight:205, pts:7.3, reb:3.6, ast:3.4, pie:8.2},
    {playerId: 204001, playerName:"Kristaps Porzingis", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"7-3", weight:240, pts:19.2, reb:9.5, ast:1.7, pie:12.4},
    {playerId: 1629065, playerName:"Ky Bowman", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-1", weight:187, pts:7.4, reb:2.7, ast:2.9, pie:6.7},
    {playerId: 203937, playerName:"Kyle Anderson", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-9", weight:230, pts:5.7, reb:4.4, ast:2.2, pie:9.9},
    {playerId: 1629657, playerName:"Kyle Guy", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-1", weight:167, pts:1.0, reb:0.0, ast:0.0, pie:4.2},
    {playerId: 2594, playerName:"Kyle Korver", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-7", weight:212, pts:6.7, reb:2.1, ast:1.2, pie:7.3},
    {playerId: 1628398, playerName:"Kyle Kuzma", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-8", weight:221, pts:12.5, reb:4.5, ast:1.3, pie:8.2},
    {playerId: 200768, playerName:"Kyle Lowry", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-0", weight:196, pts:19.7, reb:4.8, ast:7.7, pie:12.3},
    {playerId: 203124, playerName:"Kyle O'Quinn", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-9", weight:250, pts:3.3, reb:3.8, ast:1.3, pie:12.1},
    {playerId: 202681, playerName:"Kyrie Irving", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-2", weight:195, pts:27.4, reb:5.2, ast:6.4, pie:16.4},
    {playerId: 200746, playerName:"LaMarcus Aldridge", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-11", weight:250, pts:18.9, reb:7.4, ast:2.4, pie:12.0},
    {playerId: 1629013, playerName:"Landry Shamet", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-4", weight:190, pts:9.7, reb:1.9, ast:1.9, pie:5.2},
    {playerId: 204038, playerName:"Langston Galloway", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-1", weight:200, pts:10.3, reb:2.3, ast:1.5, pie:7.5},
    {playerId: 1626204, playerName:"Larry Nance Jr.", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-7", weight:245, pts:10.1, reb:7.3, ast:2.2, pie:12.5},
    {playerId: 1628374, playerName:"Lauri Markkanen", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"7-0", weight:240, pts:14.7, reb:6.3, ast:1.5, pie:10.3},
    {playerId: 2544, playerName:"LeBron James", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-9", weight:250, pts:25.7, reb:7.9, ast:10.6, pie:20.0},
    {playerId: 1629022, playerName:"Lonnie Walker IV", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-5", weight:204, pts:5.6, reb:2.2, ast:0.9, pie:6.8},
    {playerId: 1628366, playerName:"Lonzo Ball", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-6", weight:190, pts:12.4, reb:6.2, ast:7.0, pie:10.5},
    {playerId: 101150, playerName:"Lou Williams", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-1", weight:175, pts:18.7, reb:3.1, ast:5.7, pie:12.4},
    {playerId: 1629663, playerName:"Louis King", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-7", weight:205, pts:2.0, reb:1.0, ast:0.5, pie:4.3},
    {playerId: 1629652, playerName:"Luguentz Dort", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-3", weight:215, pts:6.2, reb:1.9, ast:0.7, pie:3.1},
    {playerId: 1629029, playerName:"Luka Doncic", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-7", weight:230, pts:28.7, reb:9.3, ast:8.7, pie:19.3},
    {playerId: 1629677, playerName:"Luka Samanic", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-10", weight:227, pts:0.0, reb:2.0, ast:3.0, pie:2.5},
    {playerId: 1628379, playerName:"Luke Kennard", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-5", weight:206, pts:15.8, reb:3.5, ast:4.1, pie:9.8},
    {playerId: 1628436, playerName:"Luke Kornet", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"7-2", weight:250, pts:6.0, reb:2.3, ast:0.9, pie:7.3},
    {playerId: 1627763, playerName:"Malcolm Brogdon", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-5", weight:229, pts:16.3, reb:4.7, ast:7.1, pie:13.5},
    {playerId: 1626259, playerName:"Malcolm Miller", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-7", weight:210, pts:0.9, reb:0.6, ast:0.3, pie:2.9},
    {playerId: 1627736, playerName:"Malik Beasley", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-4", weight:187, pts:11.2, reb:2.7, ast:1.4, pie:8.3},
    {playerId: 1628370, playerName:"Malik Monk", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-3", weight:200, pts:10.3, reb:2.9, ast:2.1, pie:9.1},
    {playerId: 1629005, playerName:"Malik Newman", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-3", weight:190, pts:2.0, reb:0.0, ast:0.0, pie:-15.4},
    {playerId: 201188, playerName:"Marc Gasol", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-11", weight:255, pts:7.6, reb:6.3, ast:3.4, pie:9.2},
    {playerId: 201158, playerName:"Marco Belinelli", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-5", weight:220, pts:5.8, reb:1.7, ast:1.2, pie:6.8},
    {playerId: 202694, playerName:"Marcus Morris Sr.", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-8", weight:218, pts:17.4, reb:5.1, ast:1.4, pie:9.5},
    {playerId: 203935, playerName:"Marcus Smart", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-3", weight:220, pts:13.5, reb:3.8, ast:4.8, pie:9.2},
    {playerId: 1629621, playerName:"Marial Shayok", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-5", weight:198, pts:1.5, reb:1.5, ast:0.5, pie:3.3},
    {playerId: 1626209, playerName:"Mario Hezonja", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-8", weight:220, pts:4.8, reb:3.4, ast:0.9, pie:6.8},
    {playerId: 1628365, playerName:"Markelle Fultz", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-3", weight:209, pts:12.1, reb:3.3, ast:5.2, pie:9.5},
    {playerId: 202693, playerName:"Markieff Morris", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-8", weight:245, pts:10.1, reb:3.8, ast:1.4, pie:8.4},
    {playerId: 1629741, playerName:"Marko Guduric", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-6", weight:201, pts:4.0, reb:1.7, ast:1.1, pie:6.5},
    {playerId: 1629716, playerName:"Marques Bolden", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-10", weight:249, pts:0.0, reb:2.0, ast:0.0, pie:30.8},
    {playerId: 1627737, playerName:"Marquese Chriss", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-9", weight:240, pts:9.3, reb:6.2, ast:1.9, pie:12.7},
    {playerId: 1628963, playerName:"Marvin Bagley III", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-11", weight:235, pts:14.2, reb:7.5, ast:0.8, pie:9.7},
    {playerId: 101107, playerName:"Marvin Williams", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-8", weight:237, pts:6.1, reb:2.8, ast:1.1, pie:7.4},
    {playerId: 203486, playerName:"Mason Plumlee", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-11", weight:254, pts:7.2, reb:5.3, ast:2.4, pie:12.2},
    {playerId: 1629680, playerName:"Matisse Thybulle", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-5", weight:201, pts:4.7, reb:1.5, ast:1.2, pie:4.3},
    {playerId: 1629760, playerName:"Matt Mooney", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-2", weight:199, pts:0.5, reb:0.8, ast:0.3, pie:7.5},
    {playerId: 1629744, playerName:"Matt Thomas", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-4", weight:190, pts:4.5, reb:1.5, ast:0.5, pie:9.9},
    {playerId: 203521, playerName:"Matthew Dellavedova", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-3", weight:200, pts:3.1, reb:1.3, ast:3.2, pie:5.9},
    {playerId: 203090, playerName:"Maurice Harkless", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-7", weight:220, pts:5.8, reb:3.9, ast:1.1, pie:5.9},
    {playerId: 1629622, playerName:"Max Strus", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-5", weight:215, pts:2.5, reb:0.5, ast:0.0, pie:12.3},
    {playerId: 1628467, playerName:"Maxi Kleber", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-10", weight:240, pts:9.2, reb:5.4, ast:1.2, pie:8.5},
    {playerId: 1628982, playerName:"Melvin Frazier Jr.", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-5", weight:215, pts:1.2, reb:0.3, ast:0.1, pie:2.2},
    {playerId: 203086, playerName:"Meyers Leonard", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"7-0", weight:260, pts:6.1, reb:5.1, ast:1.1, pie:8.7},
    {playerId: 1629662, playerName:"Mfiondu Kabengele", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-9", weight:250, pts:3.5, reb:0.9, ast:0.2, pie:11.2},
    {playerId: 203487, playerName:"Michael Carter-Williams", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-5", weight:190, pts:7.2, reb:3.3, ast:2.4, pie:10.1},
    {playerId: 1626187, playerName:"Michael Frazier", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-3", weight:200, pts:1.8, reb:0.4, ast:0.1, pie:-1.9},
    {playerId: 203077, playerName:"Michael Kidd-Gilchrist", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-6", weight:232, pts:2.5, reb:2.6, ast:0.6, pie:3.9},
    {playerId: 1629008, playerName:"Michael Porter Jr.", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-10", weight:218, pts:7.5, reb:4.1, ast:0.7, pie:11.5},
    {playerId: 1628969, playerName:"Mikal Bridges", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-6", weight:209, pts:8.7, reb:4.0, ast:1.8, pie:8.3},
    {playerId: 201144, playerName:"Mike Conley", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-1", weight:175, pts:13.8, reb:3.2, ast:4.3, pie:9.3},
    {playerId: 203488, playerName:"Mike Muscala", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-10", weight:240, pts:4.6, reb:2.3, ast:0.8, pie:8.2},
    {playerId: 203118, playerName:"Mike Scott", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-7", weight:237, pts:5.7, reb:3.6, ast:0.8, pie:7.4},
    {playerId: 1628970, playerName:"Miles Bridges", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-6", weight:225, pts:13.0, reb:5.6, ast:1.8, pie:8.2},
    {playerId: 1629011, playerName:"Mitchell Robinson", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"7-0", weight:240, pts:9.7, reb:7.0, ast:0.6, pie:12.9},
    {playerId: 1629671, playerName:"Miye Oni", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-5", weight:206, pts:0.0, reb:0.4, ast:0.0, pie:-3.1},
    {playerId: 1628964, playerName:"Mo Bamba", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"7-0", weight:231, pts:5.5, reb:5.0, ast:0.7, pie:11.7},
    {playerId: 1628420, playerName:"Monte Morris", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-2", weight:183, pts:8.4, reb:1.7, ast:3.5, pie:10.0},
    {playerId: 1626149, playerName:"Montrezl Harrell", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-7", weight:240, pts:18.6, reb:7.1, ast:1.7, pie:14.5},
    {playerId: 1629021, playerName:"Moritz Wagner", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-11", weight:245, pts:9.5, reb:5.2, ast:1.3, pie:10.0},
    {playerId: 1629650, playerName:"Moses Brown", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"7-2", weight:245, pts:1.2, reb:1.6, ast:0.1, pie:3.2},
    {playerId: 1628539, playerName:"Mychal Mulder", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-3", weight:184, pts:11.0, reb:3.3, ast:1.1, pie:5.0},
    {playerId: 1626167, playerName:"Myles Turner", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-11", weight:250, pts:11.8, reb:6.5, ast:1.1, pie:9.6},
    {playerId: 1629642, playerName:"Nassir Little", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-5", weight:220, pts:3.6, reb:2.3, ast:0.5, pie:5.0},
    {playerId: 1628513, playerName:"Naz Mitrou-Long", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-3", weight:218, pts:4.7, reb:2.0, ast:2.3, pie:12.5},
    {playerId: 1629675, playerName:"Naz Reid", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-9", weight:264, pts:9.0, reb:4.1, ast:1.2, pie:8.5},
    {playerId: 202357, playerName:"Nemanja Bjelica", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-10", weight:234, pts:11.9, reb:6.4, ast:2.8, pie:10.1},
    {playerId: 203457, playerName:"Nerlens Noel", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-10", weight:220, pts:7.7, reb:4.9, ast:1.0, pie:13.2},
    {playerId: 1629638, playerName:"Nickeil Alexander-Walker", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-5", weight:205, pts:5.1, reb:2.0, ast:1.8, pie:6.2},
    {playerId: 201587, playerName:"Nicolas Batum", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-9", weight:230, pts:3.6, reb:4.5, ast:3.0, pie:6.8},
    {playerId: 1629651, playerName:"Nicolas Claxton", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-11", weight:215, pts:4.4, reb:2.9, ast:1.1, pie:9.2},
    {playerId: 1629740, playerName:"Nicolo Melli", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-9", weight:236, pts:6.8, reb:3.0, ast:1.3, pie:7.7},
    {playerId: 1628430, playerName:"Nigel Williams-Goss", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-2", weight:190, pts:0.4, reb:0.6, ast:0.6, pie:5.0},
    {playerId: 203999, playerName:"Nikola Jokic", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"7-0", weight:284, pts:20.2, reb:10.2, ast:6.9, pie:18.2},
    {playerId: 202696, playerName:"Nikola Vucevic", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-11", weight:260, pts:19.5, reb:11.0, ast:3.7, pie:14.9},
    {playerId: 203943, playerName:"Noah Vonleh", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-10", weight:257, pts:3.8, reb:3.7, ast:0.8, pie:12.7},
    {playerId: 1626181, playerName:"Norman Powell", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-3", weight:215, pts:16.4, reb:3.7, ast:1.8, pie:11.1},
    {playerId: 203658, playerName:"Norvel Pelle", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-10", weight:231, pts:2.1, reb:3.0, ast:0.4, pie:6.1},
    {playerId: 1628384, playerName:"OG Anunoby", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-7", weight:232, pts:10.7, reb:5.4, ast:1.6, pie:8.5},
    {playerId: 1629016, playerName:"Omari Spellman", teamName:"Minnesota Timberwolves", teamAbbreviation:"MIN", teamCity:"Minnesota", height:"6-8", weight:245, pts:7.6, reb:4.5, ast:1.0, pie:9.8},
    {playerId: 1629052, playerName:"Oshae Brissett", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-7", weight:210, pts:1.9, reb:1.4, ast:0.4, pie:4.2},
    {playerId: 203490, playerName:"Otto Porter Jr.", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-8", weight:198, pts:11.9, reb:3.4, ast:1.8, pie:9.5},
    {playerId: 200782, playerName:"P.J. Tucker", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-5", weight:245, pts:7.1, reb:6.9, ast:1.6, pie:6.0},
    {playerId: 1629023, playerName:"P.J. Washington", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-7", weight:230, pts:12.2, reb:5.4, ast:2.1, pie:8.3},
    {playerId: 1628408, playerName:"PJ Dozier", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-6", weight:205, pts:4.1, reb:1.4, ast:1.4, pie:5.6},
    {playerId: 1627783, playerName:"Pascal Siakam", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-9", weight:230, pts:23.6, reb:7.5, ast:3.6, pie:13.2},
    {playerId: 1626192, playerName:"Pat Connaughton", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-5", weight:209, pts:5.1, reb:4.2, ast:1.6, pie:8.9},
    {playerId: 201976, playerName:"Patrick Beverley", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-1", weight:180, pts:7.9, reb:5.4, ast:3.7, pie:8.8},
    {playerId: 1627775, playerName:"Patrick McCaw", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-7", weight:181, pts:4.6, reb:2.3, ast:2.1, pie:5.0},
    {playerId: 202335, playerName:"Patrick Patterson", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-8", weight:235, pts:4.6, reb:2.4, ast:0.6, pie:8.6},
    {playerId: 201988, playerName:"Patty Mills", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-1", weight:180, pts:11.7, reb:1.6, ast:1.8, pie:8.2},
    {playerId: 202331, playerName:"Paul George", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-8", weight:220, pts:21.0, reb:5.7, ast:3.9, pie:14.4},
    {playerId: 200794, playerName:"Paul Millsap", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-7", weight:257, pts:12.0, reb:5.9, ast:1.6, pie:10.8},
    {playerId: 1628778, playerName:"Paul Watson", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-6", weight:210, pts:0.2, reb:0.8, ast:1.0, pie:2.0},
    {playerId: 1626188, playerName:"Quinn Cook", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-1", weight:180, pts:4.8, reb:1.1, ast:1.1, pie:7.7},
    {playerId: 1629683, playerName:"Quinndary Weatherspoon", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-3", weight:205, pts:0.0, reb:0.3, ast:0.3, pie:-2.1},
    {playerId: 1629628, playerName:"RJ Barrett", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-6", weight:214, pts:14.3, reb:5.0, ast:2.6, pie:7.2},
    {playerId: 200765, playerName:"Rajon Rondo", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-1", weight:180, pts:7.1, reb:3.0, ast:5.0, pie:10.4},
    {playerId: 203526, playerName:"Raul Neto", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-1", weight:180, pts:4.3, reb:1.1, ast:1.6, pie:8.9},
    {playerId: 1629730, playerName:"Rayjon Tucker", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-3", weight:209, pts:1.4, reb:0.9, ast:0.1, pie:3.5},
    {playerId: 203493, playerName:"Reggie Bullock", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-6", weight:205, pts:8.1, reb:2.3, ast:1.4, pie:5.8},
    {playerId: 202704, playerName:"Reggie Jackson", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-3", weight:208, pts:12.8, reb:2.9, ast:4.4, pie:10.4},
    {playerId: 1626158, playerName:"Richaun Holmes", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-10", weight:235, pts:12.8, reb:8.3, ast:1.0, pie:12.0},
    {playerId: 201937, playerName:"Ricky Rubio", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-3", weight:190, pts:13.1, reb:4.6, ast:8.9, pie:11.9},
    {playerId: 203496, playerName:"Robert Covington", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-7", weight:209, pts:12.8, reb:6.4, ast:1.2, pie:9.1},
    {playerId: 1629057, playerName:"Robert Williams III", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-8", weight:237, pts:4.3, reb:4.7, ast:1.0, pie:12.5},
    {playerId: 201577, playerName:"Robin Lopez", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"7-0", weight:281, pts:5.5, reb:2.4, ast:0.7, pie:6.6},
    {playerId: 1629066, playerName:"Rodions Kurucs", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-9", weight:228, pts:4.2, reb:2.5, ast:0.8, pie:6.4},
    {playerId: 203918, playerName:"Rodney Hood", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-8", weight:208, pts:11.0, reb:3.4, ast:1.5, pie:7.4},
    {playerId: 203585, playerName:"Rodney McGruder", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-4", weight:205, pts:3.2, reb:2.6, ast:0.6, pie:4.5},
    {playerId: 1629641, playerName:"Romeo Langford", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-4", weight:216, pts:2.6, reb:1.2, ast:0.2, pie:2.3},
    {playerId: 1626178, playerName:"Rondae Hollis-Jefferson", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-6", weight:217, pts:7.2, reb:4.9, ast:1.7, pie:10.3},
    {playerId: 1626220, playerName:"Royce O'Neale", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-4", weight:226, pts:6.3, reb:5.3, ast:2.5, pie:7.1},
    {playerId: 200752, playerName:"Rudy Gay", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-8", weight:250, pts:10.0, reb:5.4, ast:1.7, pie:10.7},
    {playerId: 203497, playerName:"Rudy Gobert", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"7-1", weight:258, pts:15.1, reb:13.7, ast:1.5, pie:15.1},
    {playerId: 1629060, playerName:"Rui Hachimura", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-8", weight:230, pts:13.4, reb:6.0, ast:1.7, pie:9.2},
    {playerId: 201566, playerName:"Russell Westbrook", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-3", weight:200, pts:27.5, reb:8.0, ast:7.0, pie:14.8},
    {playerId: 201583, playerName:"Ryan Anderson", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-9", weight:240, pts:2.5, reb:3.5, ast:1.0, pie:11.5},
    {playerId: 1627853, playerName:"Ryan Arcidiacono", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-3", weight:195, pts:4.5, reb:1.9, ast:1.7, pie:6.1},
    {playerId: 1629151, playerName:"Ryan Broekhoff", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-6", weight:215, pts:4.2, reb:2.5, ast:0.6, pie:8.4},
    {playerId: 1629635, playerName:"Sekou Doumbouya", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-8", weight:230, pts:6.4, reb:3.1, ast:0.5, pie:3.9},
    {playerId: 1628400, playerName:"Semi Ojeleye", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"6-6", weight:240, pts:3.1, reb:2.0, ast:0.5, pie:5.7},
    {playerId: 201586, playerName:"Serge Ibaka", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"7-0", weight:235, pts:16.0, reb:8.3, ast:1.5, pie:12.8},
    {playerId: 203552, playerName:"Seth Curry", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-2", weight:185, pts:12.6, reb:2.4, ast:2.0, pie:9.9},
    {playerId: 203894, playerName:"Shabazz Napier", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-0", weight:175, pts:10.3, reb:2.9, ast:5.0, pie:10.6},
    {playerId: 1628983, playerName:"Shai Gilgeous-Alexander", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-5", weight:180, pts:19.3, reb:6.1, ast:3.3, pie:12.3},
    {playerId: 1629003, playerName:"Shake Milton", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-5", weight:205, pts:9.5, reb:2.1, ast:2.2, pie:9.0},
    {playerId: 1629044, playerName:"Shamorie Ponds", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-0", weight:175, pts:2.3, reb:0.3, ast:0.5, pie:19.1},
    {playerId: 1627885, playerName:"Shaquille Harrison", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-7", weight:190, pts:4.9, reb:2.0, ast:1.1, pie:11.4},
    {playerId: 1627746, playerName:"Skal Labissiere", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-10", weight:235, pts:5.8, reb:5.1, ast:1.3, pie:9.3},
    {playerId: 203524, playerName:"Solomon Hill", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-6", weight:226, pts:5.4, reb:2.9, ast:1.8, pie:6.7},
    {playerId: 203915, playerName:"Spencer Dinwiddie", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-5", weight:215, pts:20.6, reb:3.5, ast:6.8, pie:12.1},
    {playerId: 1626169, playerName:"Stanley Johnson", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-6", weight:242, pts:1.2, reb:1.1, ast:0.4, pie:4.6},
    {playerId: 1629742, playerName:"Stanton Kidd", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-6", weight:216, pts:0.0, reb:0.8, ast:0.3, pie:-7.7},
    {playerId: 201939, playerName:"Stephen Curry", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-3", weight:185, pts:20.8, reb:5.2, ast:6.6, pie:13.3},
    {playerId: 1628425, playerName:"Sterling Brown", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-5", weight:219, pts:5.0, reb:3.7, ast:1.0, pie:8.1},
    {playerId: 203500, playerName:"Steven Adams", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-11", weight:265, pts:10.9, reb:9.4, ast:2.4, pie:13.7},
    {playerId: 1629004, playerName:"Svi Mykhailiuk", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-7", weight:205, pts:9.0, reb:1.9, ast:1.9, pie:6.9},
    {playerId: 204456, playerName:"T.J. McConnell", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-1", weight:190, pts:6.5, reb:2.6, ast:5.0, pie:12.0},
    {playerId: 203933, playerName:"T.J. Warren", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-8", weight:220, pts:18.7, reb:4.0, ast:1.4, pie:10.5},
    {playerId: 1628388, playerName:"TJ Leaf", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-10", weight:222, pts:2.9, reb:2.6, ast:0.2, pie:10.2},
    {playerId: 1629605, playerName:"Tacko Fall", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"7-5", weight:311, pts:3.2, reb:1.8, ast:0.0, pie:20.0},
    {playerId: 201959, playerName:"Taj Gibson", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-9", weight:232, pts:6.1, reb:4.3, ast:0.8, pie:9.7},
    {playerId: 1629659, playerName:"Talen Horton-Tucker", teamName:"Los Angeles Lakers", teamAbbreviation:"LAL", teamCity:"Los Angeles", height:"6-4", weight:234, pts:0.0, reb:0.0, ast:1.0, pie:14.8},
    {playerId: 1629745, playerName:"Tariq Owens", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-10", weight:205, pts:1.3, reb:1.0, ast:0.0, pie:3.1},
    {playerId: 1627752, playerName:"Taurean Prince", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-7", weight:218, pts:12.1, reb:6.0, ast:1.8, pie:7.4},
    {playerId: 1629611, playerName:"Terance Mann", teamName:"Los Angeles Clippers", teamAbbreviation:"LAC", teamCity:"Los Angeles", height:"6-5", weight:215, pts:1.6, reb:0.9, ast:1.1, pie:4.8},
    {playerId: 1629056, playerName:"Terence Davis", teamName:"Toronto Raptors", teamAbbreviation:"TOR", teamCity:"Toronto", height:"6-4", weight:201, pts:7.7, reb:3.4, ast:1.7, pie:10.8},
    {playerId: 1628390, playerName:"Terrance Ferguson", teamName:"Oklahoma City Thunder", teamAbbreviation:"OKC", teamCity:"Oklahoma City", height:"6-6", weight:190, pts:4.2, reb:1.5, ast:0.9, pie:1.0},
    {playerId: 203082, playerName:"Terrence Ross", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-6", weight:206, pts:14.8, reb:3.2, ast:1.2, pie:9.7},
    {playerId: 1626179, playerName:"Terry Rozier", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-1", weight:190, pts:18.0, reb:4.4, ast:4.1, pie:10.3},
    {playerId: 200757, playerName:"Thabo Sefolosha", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-6", weight:215, pts:2.2, reb:2.3, ast:0.6, pie:6.4},
    {playerId: 201152, playerName:"Thaddeus Young", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-8", weight:235, pts:10.3, reb:4.9, ast:1.8, pie:8.9},
    {playerId: 203648, playerName:"Thanasis Antetokounmpo", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-6", weight:219, pts:2.5, reb:1.1, ast:0.5, pie:6.8},
    {playerId: 1629033, playerName:"Theo Pinson", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-5", weight:212, pts:3.6, reb:1.6, ast:1.7, pie:5.1},
    {playerId: 1628418, playerName:"Thomas Bryant", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-10", weight:248, pts:12.1, reb:6.8, ast:1.9, pie:12.2},
    {playerId: 1627748, playerName:"Thon Maker", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"7-0", weight:221, pts:4.7, reb:2.8, ast:0.7, pie:7.6},
    {playerId: 204025, playerName:"Tim Frazier", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-0", weight:170, pts:3.6, reb:1.2, ast:3.4, pie:6.8},
    {playerId: 203501, playerName:"Tim Hardaway Jr.", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"6-5", weight:205, pts:15.8, reb:3.1, ast:2.0, pie:9.2},
    {playerId: 1627789, playerName:"Timothe Luwawu-Cabarrot", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-7", weight:220, pts:6.3, reb:2.3, ast:0.6, pie:5.5},
    {playerId: 202699, playerName:"Tobias Harris", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-8", weight:226, pts:19.4, reb:6.8, ast:3.2, pie:12.4},
    {playerId: 203107, playerName:"Tomas Satoransky", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-7", weight:210, pts:9.9, reb:3.9, ast:5.4, pie:9.4},
    {playerId: 1628396, playerName:"Tony Bradley", teamName:"Utah Jazz", teamAbbreviation:"UTA", teamCity:"Utah", height:"6-10", weight:248, pts:4.7, reb:4.3, ast:0.3, pie:12.1},
    {playerId: 203503, playerName:"Tony Snell", teamName:"Detroit Pistons", teamAbbreviation:"DET", teamCity:"Detroit", height:"6-6", weight:213, pts:8.0, reb:1.9, ast:2.2, pie:6.2},
    {playerId: 1628470, playerName:"Torrey Craig", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-7", weight:221, pts:5.0, reb:3.1, ast:0.7, pie:5.6},
    {playerId: 1629027, playerName:"Trae Young", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-1", weight:180, pts:29.6, reb:4.3, ast:9.3, pie:16.0},
    {playerId: 1629682, playerName:"Tremont Waters", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"5-10", weight:175, pts:3.3, reb:0.9, ast:1.2, pie:4.7},
    {playerId: 1626203, playerName:"Treveon Graham", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-5", weight:219, pts:4.4, reb:2.7, ast:0.8, pie:3.7},
    {playerId: 2772, playerName:"Trevor Ariza", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-8", weight:215, pts:8.0, reb:4.6, ast:1.7, pie:7.7},
    {playerId: 203504, playerName:"Trey Burke", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-0", weight:185, pts:5.9, reb:1.4, ast:2.1, pie:10.7},
    {playerId: 1626168, playerName:"Trey Lyles", teamName:"San Antonio Spurs", teamAbbreviation:"SAS", teamCity:"San Antonio", height:"6-9", weight:234, pts:6.4, reb:5.7, ast:1.1, pie:8.8},
    {playerId: 202684, playerName:"Tristan Thompson", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-9", weight:254, pts:12.0, reb:10.1, ast:2.1, pie:10.8},
    {playerId: 1628972, playerName:"Troy Brown Jr.", teamName:"Washington Wizards", teamAbbreviation:"WAS", teamCity:"Washington", height:"6-6", weight:215, pts:9.7, reb:5.3, ast:2.3, pie:9.9},
    {playerId: 203584, playerName:"Troy Daniels", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-4", weight:200, pts:4.1, reb:1.1, ast:0.3, pie:5.8},
    {playerId: 1629660, playerName:"Ty Jerome", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-5", weight:195, pts:3.5, reb:1.5, ast:1.5, pie:6.6},
    {playerId: 1629076, playerName:"Tyler Cook", teamName:"Cleveland Cavaliers", teamAbbreviation:"CLE", teamCity:"Cleveland", height:"6-8", weight:255, pts:1.7, reb:0.9, ast:0.1, pie:12.3},
    {playerId: 1629639, playerName:"Tyler Herro", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-5", weight:195, pts:12.9, reb:4.0, ast:1.9, pie:9.2},
    {playerId: 204020, playerName:"Tyler Johnson", teamName:"Phoenix Suns", teamAbbreviation:"PHX", teamCity:"Phoenix", height:"6-3", weight:186, pts:5.7, reb:1.7, ast:1.6, pie:5.6},
    {playerId: 1627820, playerName:"Tyrone Wallace", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-5", weight:198, pts:2.9, reb:1.6, ast:0.9, pie:3.2},
    {playerId: 2199, playerName:"Tyson Chandler", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"7-0", weight:235, pts:1.3, reb:2.5, ast:0.2, pie:6.1},
    {playerId: 1626145, playerName:"Tyus Jones", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-0", weight:196, pts:7.4, reb:1.6, ast:4.4, pie:10.8},
    {playerId: 2617, playerName:"Udonis Haslem", teamName:"Miami Heat", teamAbbreviation:"MIA", teamCity:"Miami", height:"6-8", weight:235, pts:1.7, reb:2.7, ast:0.3, pie:7.7},
    {playerId: 1629724, playerName:"Vic Law", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-7", weight:201, pts:0.0, reb:0.2, ast:0.0, pie:-26.7},
    {playerId: 203506, playerName:"Victor Oladipo", teamName:"Indiana Pacers", teamAbbreviation:"IND", teamCity:"Indiana", height:"6-4", weight:213, pts:13.8, reb:3.2, ast:3.0, pie:8.7},
    {playerId: 1713, playerName:"Vince Carter", teamName:"Atlanta Hawks", teamAbbreviation:"ATL", teamCity:"Atlanta", height:"6-6", weight:220, pts:5.0, reb:2.1, ast:0.8, pie:5.0},
    {playerId: 1629738, playerName:"Vincent Poirier", teamName:"Boston Celtics", teamAbbreviation:"BOS", teamCity:"Boston", height:"7-0", weight:235, pts:1.9, reb:1.6, ast:0.3, pie:7.0},
    {playerId: 1628427, playerName:"Vlatko Cancar", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-8", weight:236, pts:1.2, reb:0.7, ast:0.2, pie:5.2},
    {playerId: 201961, playerName:"Wayne Ellington", teamName:"New York Knicks", teamAbbreviation:"NYK", teamCity:"New York", height:"6-4", weight:207, pts:5.1, reb:1.8, ast:1.2, pie:6.8},
    {playerId: 1628976, playerName:"Wendell Carter Jr.", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-9", weight:270, pts:11.3, reb:9.4, ast:1.2, pie:10.3},
    {playerId: 1629117, playerName:"Wenyen Gabriel", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-9", weight:205, pts:2.1, reb:1.6, ast:0.3, pie:4.5},
    {playerId: 1628411, playerName:"Wes Iwundu", teamName:"Orlando Magic", teamAbbreviation:"ORL", teamCity:"Orlando", height:"6-6", weight:195, pts:5.3, reb:2.5, ast:1.0, pie:6.5},
    {playerId: 202083, playerName:"Wesley Matthews", teamName:"Milwaukee Bucks", teamAbbreviation:"MIL", teamCity:"Milwaukee", height:"6-4", weight:220, pts:7.5, reb:2.6, ast:1.5, pie:5.6},
    {playerId: 203115, playerName:"Will Barton", teamName:"Denver Nuggets", teamAbbreviation:"DEN", teamCity:"Denver", height:"6-5", weight:181, pts:15.1, reb:6.3, ast:3.7, pie:10.9},
    {playerId: 1629739, playerName:"William Howard", teamName:"Houston Rockets", teamAbbreviation:"HOU", teamCity:"Houston", height:"6-8", weight:207, pts:0.0, reb:1.0, ast:0.5, pie:-8.6},
    {playerId: 1626161, playerName:"Willie Cauley-Stein", teamName:"Dallas Mavericks", teamAbbreviation:"DAL", teamCity:"Dallas", height:"7-0", weight:240, pts:7.2, reb:5.8, ast:1.3, pie:11.3},
    {playerId: 1626195, playerName:"Willy Hernangomez", teamName:"Charlotte Hornets", teamAbbreviation:"CHA", teamCity:"Charlotte", height:"6-11", weight:250, pts:6.1, reb:4.3, ast:0.9, pie:14.4},
    {playerId: 201163, playerName:"Wilson Chandler", teamName:"Brooklyn Nets", teamAbbreviation:"BKN", teamCity:"Brooklyn", height:"6-8", weight:235, pts:5.9, reb:4.1, ast:1.1, pie:6.5},
    {playerId: 1627812, playerName:"Yogi Ferrell", teamName:"Sacramento Kings", teamAbbreviation:"SAC", teamCity:"Sacramento", height:"6-0", weight:178, pts:4.2, reb:1.1, ast:1.3, pie:8.6},
    {playerId: 1629139, playerName:"Yuta Watanabe", teamName:"Memphis Grizzlies", teamAbbreviation:"MEM", teamCity:"Memphis", height:"6-8", weight:215, pts:1.9, reb:1.1, ast:0.3, pie:5.4},
    {playerId: 1628380, playerName:"Zach Collins", teamName:"Portland Trail Blazers", teamAbbreviation:"POR", teamCity:"Portland Trail", height:"6-11", weight:250, pts:9.0, reb:4.0, ast:2.0, pie:5.1},
    {playerId: 203897, playerName:"Zach LaVine", teamName:"Chicago Bulls", teamAbbreviation:"CHI", teamCity:"Chicago", height:"6-6", weight:200, pts:25.5, reb:4.8, ast:4.2, pie:13.0},
    {playerId: 1629668, playerName:"Zach Norvell Jr.", teamName:"Golden State Warriors", teamAbbreviation:"GSW", teamCity:"Golden State", height:"6-5", weight:205, pts:2.0, reb:1.2, ast:0.6, pie:2.6},
    {playerId: 1629015, playerName:"Zhaire Smith", teamName:"Philadelphia 76ers", teamAbbreviation:"PHI", teamCity:"Philadelphia", height:"6-3", weight:205, pts:1.1, reb:0.3, ast:0.3, pie:-0.8},
    {playerId: 1629627, playerName:"Zion Williamson", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-6", weight:284, pts:23.6, reb:6.8, ast:2.2, pie:14.3},
    {playerId: 1629597, playerName:"Zylan Cheatham", teamName:"New Orleans Pelicans", teamAbbreviation:"NOP", teamCity:"New Orleans", height:"6-5", weight:220, pts:1.3, reb:2.0, ast:0.7, pie:0.9},
]



/* {playerId: , playerName:"", teamName:"", teamAbbreviation:"", teamCity:"", height:"", weight:"", pts:"", reb:"", ast:"", pie:""},*/