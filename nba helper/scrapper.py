from urllib import urlopen
from bs4 import BeautifulSoup

def getWebpage(link):
	html = urlopen(link)
	soup = BeautifulSoup(html, 'html.parser')
	return soup


# get local html to avoid anti-scrapper on website
# change this
html = getWebpage('nba11.html')

pie1 = getWebpage('pie1.html')
pie2 = getWebpage('pie2.html')
pie3 = getWebpage('pie3.html')
pie4 = getWebpage('pie4.html')
pie5 = getWebpage('pie5.html')
pie6 = getWebpage('pie6.html')
pie7 = getWebpage('pie7.html')
pie8 = getWebpage('pie8.html')
pie9 = getWebpage('pie9.html')
pie10 = getWebpage('pie10.html')
pie11 = getWebpage('pie11.html')

pies = [pie1, pie2, pie3, pie4, pie5, pie6, pie7, pie8, pie9, pie10, pie11]


# find the <nba-stat-table> tag
s = html.findAll('nba-stat-table')

# find tables under <nba-stat-table> tag
tables = s[0].findAll('table')

# find tbody
tbody = tables[0].find('tbody')

# find tr
trs = tbody.findAll('tr')

# dictionary to help get city name and full team name from team abbreviation
dictFull = {
	"ATL": "Atlanta Hawks",
	"BKN":"Brooklyn Nets", 
	"BOS":"Boston Celtics",
	"CHA":"Charlotte Hornets",
	"CHI":"Chicago Bulls",
	"CLE":"Cleveland Cavaliers",
	"DAL":"Dallas Mavericks",
	"DEN":"Denver Nuggets",
	"DET":"Detroit Pistons",
	"GSW":"Golden State Warriors",
	"HOU":"Houston Rockets",
	"IND":"Indiana Pacers",
	"LAC":"Los Angeles Clippers",
	"LAL":"Los Angeles Lakers",
	"MEM":"Memphis Grizzlies",
	"MIA":"Miami Heat",
	"MIL":"Milwaukee Bucks",
	"MIN":"Minnesota Timberwolves",
	"NOP":"New Orleans Pelicans",
	"NYK":"New York Knicks",
	"OKC":"Oklahoma City Thunder",
	"ORL":"Orlando Magic",
	"PHI":"Philadelphia 76ers",
	"PHX":"Phoenix Suns",
	"POR":"Portland Trail Blazers",
	"SAC":"Sacramento Kings",
	"SAS":"San Antonio Spurs",
	"TOR":"Toronto Raptors",
	"UTA":"Utah Jazz",
	"WAS":"Washington Wizards"
}

pieDict = {}

for pie in pies:
	tablesP = pie.findAll('table')
	tbodyP = tablesP[0].findAll('tbody')
	trsP = tbodyP[0].findAll('tr')
	for trP in trsP:
		tdsP = trP.findAll('td')
		pieDict[tdsP[1].find('a').string] = tdsP[22].string

print(len(pieDict))

f = open("nba_profile.txt", "a")

# read playerId, name, team abbreviation, height, weight, pts, reb, ast, 
for tr in trs:
	tds = tr.findAll('td')
	name = tds[0].find('a').string
	playerId = tds[0].find('a')['href'].split('/')[2]
	abb = tds[1].find('a').string
	h = tds[3].string
	w = tds[4].string
	pts = tds[11].string
	reb = tds[12].string
	ast = tds[13].string
	fullTeam = dictFull.get(abb)
	city = ""
	middle = fullTeam.split(" ")
	if len(middle) == 2:
		city = middle[0]
	elif len(middle) == 3:
		city = middle[0] + " "+ middle[1]
	else:
		print("Attention! Wrong city name-----------------------------------------------------")

	res = "{playerId: " + playerId + ", playerName:\"" + name + "\", teamName:\"" + fullTeam + "\", teamAbbreviation:\"" + abb + "\", teamCity:\"" + city + "\", height:\"" + h + "\", weight:" + w + ", pts:" + pts + ", reb:" + reb + ", ast:" + ast + ", pie:" + pieDict.get(name) + "},"
	f.write(res + "\n")
	

f.close()

