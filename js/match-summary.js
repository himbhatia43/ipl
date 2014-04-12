

var img="<img src='images/members/no-photo.png' class='img-padd'/>";
var dir1="<img src='images/members/";
var dir2=".png' class='img-padd'/>";

var data = new Array();
// JavaScript Document
data[0]="5~4~1~Mumbai Indians vs Kolkata Knight Riders~2:30pm GMT (8:00pm IST), Wednesday 16th April 2014~Sheikh Zayed Stadium, Abu Dhabi~Sheikh Zayed Stadium~Mumbai Indians~Kolkata Knight Riders";
data[1]="2~7~2~Delhi Daredevils vs Royal Challengers Bangalore~2:30pm GMT (8:00pm IST), Thursday 17th April 2014~Sharjah Cricket Stadium, Sharjah~Sharjah Cricket Stadium~Delhi Daredevils~Royal Challengers Bangalore";
data[2]="1~3~3~Chennai Super Kings vs Kings XI Punjab~10:30am GMT (4:00pm IST), Friday 18th April 2014~Sheikh Zayed Stadium, Abu Dhabi~Sheikh Zayed Stadium~Chennai Super Kings~Kings XI Punjab";
data[3]="8~6~4~Sunrisers Hyderabad vs Rajasthan Royals~2:30pm GMT (8:00pm IST), Friday 18th April 2014~Sheikh Zayed Stadium, Abu Dhabi~Sheikh Zayed Stadium~Sunrisers Hyderabad~Rajasthan Royals";
data[4]="7~5~5~Royal Challengers Bangalore vs Mumbai Indians~10:30am GMT (4:00pm IST), Saturday 19th April 2014~Dubai International Cricket Stadium, Dubai~Dubai International Cricket Stadium~Royal Challengers Bangalore~Mumbai Indians";
data[5]="4~2~6~Kolkata Knight Riders vs Delhi Daredevils~2:30pm GMT (8:00pm IST), Saturday 19th April 2014~Dubai International Cricket Stadium, Dubai~Dubai International Cricket Stadium~Kolkata Knight Riders~Delhi Daredevils";
data[6]="6~3~7~Rajasthan Royals vs Kings XI Punjab~2:30pm GMT (8:00pm IST), Sunday 20th April 2014~Sharjah Cricket Stadium, Sharjah~Sharjah Cricket Stadium~Rajasthan Royals~Kings XI Punjab";
data[7]="1~2~8~Chennai Super Kings vs Delhi Daredevils~2:30pm GMT (8:00pm IST), Monday 21st April 2014~Sheikh Zayed Stadium, Abu Dhabi~Sheikh Zayed Stadium~Chennai Super Kings~Delhi Daredevils";
data[8]="3~8~9~Kings XI Punjab vs Sunrisers Hyderabad~2:30pm GMT (8:00pm IST), Tuesday 22nd April 2014~Sharjah Cricket Stadium, Sharjah~Sharjah Cricket Stadium~Kings XI Punjab~Sunrisers Hyderabad";
data[9]="6~1~10~Rajasthan Royals vs Chennai Super Kings~2:30pm GMT (8:00pm IST), Wednesday 23rd April 2014~Dubai International Cricket Stadium, Dubai~Dubai International Cricket Stadium~Rajasthan Royals~Chennai Super Kings";
data[10]="7~4~11~Royal Challengers Bangalore vs Kolkata Knight Riders~2:30pm GMT (8:00pm IST), Thursday 24th April 2014~Sharjah Cricket Stadium, Sharjah~Sharjah Cricket Stadium~Royal Challengers Bangalore~Kolkata Knight Riders";
data[11]="8~2~12~Sunrisers Hyderabad vs Delhi Daredevils~10:30am GMT (4:00pm IST), Friday 25th April 2014~Dubai International Cricket Stadium, Dubai~Dubai International Cricket Stadium~Sunrisers Hyderabad~Delhi Daredevils";
data[12]="1~5~13~Chennai Super Kings vs Mumbai Indians~2:30pm GMT (8:00pm IST), Friday 25th April 2014~Dubai International Cricket Stadium, Dubai~Dubai International Cricket Stadium~Chennai Super Kings~Mumbai Indians";
data[13]="6~7~14~Rajasthan Royals vs Royal Challengers Bangalore~10:30am GMT (4:00pm IST), Saturday 26th April 2014~Sheikh Zayed Stadium, Abu Dhabi~Sheikh Zayed Stadium~Rajasthan Royals~Royal Challengers Bangalore";
data[14]="4~3~15~Kolkata Knight Riders vs Kings XI Punjab~2:30pm GMT (8:00pm IST), Saturday 26th April 2014~Sheikh Zayed Stadium, Abu Dhabi~Sheikh Zayed Stadium~Kolkata Knight Riders~Kings XI Punjab";
data[15]="2~5~16~Delhi Daredevils vs Mumbai Indians~10:30am GMT (4:00pm IST), Sunday 27th April 2014~Sharjah Cricket Stadium, Sharjah~Sharjah Cricket Stadium~Delhi Daredevils~Mumbai Indians"
data[16]="8~1~17~Sunrisers Hyderabad vs Chennai Super Kings~2:30pm GMT (8:00pm IST), Sunday 27th April 2014~Sharjah Cricket Stadium, Sharjah~Sharjah Cricket Stadium~Sunrisers Hyderabad~Chennai Super Kings";
data[17]="3~7~18~Kings XI Punjab vs Royal Challengers Bangalore~2:30pm GMT (8:00pm IST), Monday 28th April 2014~Dubai International Cricket Stadium, Dubai~Dubai International Cricket Stadium~Kings XI Punjab~Royal Challengers Bangalore";
data[18]="4~6~19~Kolkata Knight Riders vs Rajasthan Royals~2:30pm GMT (8:00pm IST), Tuesday 29th April 2014~Sheikh Zayed Stadium, Abu Dhabi~Sheikh Zayed Stadium~Kolkata Knight Riders~Rajasthan Royals";
data[19]="5~8~20~Mumbai Indians vs Sunrisers Hyderabad~2:30pm GMT (8:00pm IST), Wednesday 30th April 2014~Dubai International Cricket Stadium, Dubai~Dubai International Cricket Stadium~Mumbai Indians~Sunrisers Hyderabad";
data[20]="1~4~21~Chennai Super Kings vs Kolkata Knight Riders~2:30pm GMT (8:00pm IST), Friday 2nd May 2014~JSCA International Cricket Stadium, Ranchi~JSCA Stadium~Chennai Super Kings~Kolkata Knight Riders";
data[21]="5~3~22~Mumbai Indians vs Kings XI Punjab~10:30am GMT (4:00pm IST), Saturday 3rd May 2014~Wankhede Stadium, Mumbai~Wankhede Stadium~Mumbai Indians~Kings XI Punjab";
data[22]="2~6~23~Delhi Daredevils vs Rajasthan Royals~2:30pm GMT (8:00pm IST), Saturday 3rd May 2014~Ferozeshah Kotla, Delhi~Kotla~Delhi Daredevils~Rajasthan Royals";
data[23]="7~8~24~Royal Challengers Bangalore vs Sunrisers Hyderabad~2:30pm GMT (8:00pm IST), Sunday 4th May 2014~M. Chinnaswamy Stadium, Bengaluru~Chinnaswamy~Royal Challengers Bangalore~Sunrisers Hyderabad";
data[24]="6~4~25~Rajasthan Royals vs Kolkata Knight Riders~10:30am GMT (4:00pm IST), Monday 5th May 2014~Sardar Patel Stadium, Ahmedabad~Sardar Patel Stadium~Rajasthan Royals~Kolkata Knight Riders";
data[25]="2~1~26~Delhi Daredevils vs Chennai Super Kings~2:30pm GMT (8:00pm IST), Monday 5th May 2014~Ferozeshah Kotla, Delhi~Kotla~Delhi Daredevils~Chennai Super Kings";
data[26]="5~7~27~Mumbai Indians vs Royal Challengers Bangalore~2:30pm GMT (8:00pm IST), Tuesday 6th May 2014~Wankhede Stadium, Mumbai~Wankhede Stadium~Mumbai Indians~Royal Challengers Bangalore";
data[27]="2~4~28~Delhi Daredevils vs Kolkata Knight Riders~10:30am GMT (4:00pm IST), Wednesday 7th May 2014~Ferozeshah Kotla, Delhi~Kotla~Delhi Daredevils~Kolkata Knight Riders";
data[28]="3~1~29~Kings XI Punjab vs Chennai Super Kings~2:30pm GMT (8:00pm IST), Wednesday 7th May 2014~Barabati Stadium, Cuttack~Barabati Stadium~Kings XI Punjab~Chennai Super Kings";
data[29]="6~8~30~Rajasthan Royals vs Sunrisers Hyderabad~2:30pm GMT (8:00pm IST), Thursday 8th May 2014~Sardar Patel Stadium, Ahmedabad~Sardar Patel Stadium~Rajasthan Royals~Sunrisers Hyderabad";
data[30]="7~3~31~Royal Challengers Bangalore vs Kings XI Punjab~2:30pm GMT (8:00pm IST), Friday 9th May 2014~M. Chinnaswamy Stadium, Bengaluru~Chinnaswamy~Royal Challengers Bangalore~Kings XI Punjab";
data[31]="2~8~32~Delhi Daredevils vs Sunrisers Hyderabad~10:30am GMT (4:00pm IST), Saturday 10th May 2014~Ferozeshah Kotla, Delhi~Kotla~Delhi Daredevils~Sunrisers Hyderabad";
data[32]="5~1~33~Mumbai Indians vs Chennai Super Kings~2:30pm GMT (8:00pm IST), Saturday 10th May 2014~Wankhede Stadium, Mumbai~Wankhede Stadium~Mumbai Indians~Chennai Super Kings";
data[33]="3~4~34~Kings XI Punjab vs Kolkata Knight Riders~10:30am GMT (4:00pm IST), Sunday 11th May 2014~Barabati Stadium, Cuttack~Barabati Stadium~Kings XI Punjab~Kolkata Knight Riders";
data[34]="7~6~35~Royal Challengers Bangalore vs Rajasthan Royals~2:30pm GMT (8:00pm IST), Sunday 11th May 2014~M. Chinnaswamy Stadium, Bengaluru~Chinnaswamy~Royal Challengers Bangalore~Rajasthan Royals";
data[35]="8~5~36~Sunrisers Hyderabad vs Mumbai Indians~2:30pm GMT (8:00pm IST), Monday 12th May 2014~Rajiv Gandhi Cricket Stadium, Hyderabad~RGI Stadium~Sunrisers Hyderabad~Mumbai Indians";
data[36]="1~6~37~Chennai Super Kings vs Rajasthan Royals~10:30am GMT (4:00pm IST), Tuesday 13th May 2014~JSCA International Cricket Stadium, Ranchi~JSCA Stadium~Chennai Super Kings~Rajasthan Royals";
data[37]="7~2~38~Royal Challengers Bangalore vs Delhi Daredevils~2:30pm GMT (8:00pm IST), Tuesday 13th May 2014~M. Chinnaswamy Stadium, Bengaluru~Chinnaswamy~Royal Challengers Bangalore~Delhi Daredevils";
data[38]="8~3~39~Sunrisers Hyderabad vs Kings XI Punjab~10:30am GMT (4:00pm IST), Wednesday 14th May 2014~Rajiv Gandhi Cricket Stadium, Hyderabad~RGI Stadium~Sunrisers Hyderabad~Kings XI Punjab";
data[39]="4~5~40~Kolkata Knight Riders vs Mumbai Indians~2:30pm GMT (8:00pm IST), Wednesday 14th May 2014~Eden Gardens, Kolkata~Eden Gardens~Kolkata Knight Riders~Mumbai Indians";
data[40]="6~2~41~Rajasthan Royals vs Delhi Daredevils~2:30pm GMT (8:00pm IST), Thursday 15th May 2014~Sardar Patel Stadium, Ahmedabad~Sardar Patel Stadium~Rajasthan Royals~Delhi Daredevils";
data[41]="1~7~42~Chennai Super Kings vs Royal Challengers Bangalore~10:30am GMT (4:00pm IST), Sunday 18th May 2014~M. A. Chidambaram Stadium, Chennai~Chidambaram~Chennai Super Kings~Royal Challengers Bangalore";
data[42]="8~4~43~Sunrisers Hyderabad vs Kolkata Knight Riders~2:30pm GMT (8:00pm IST), Sunday 18th May 2014~Rajiv Gandhi Cricket Stadium, Hyderabad~RGI Stadium~Sunrisers Hyderabad~Kolkata Knight Riders";
data[43]="6~5~44~Rajasthan Royals vs Mumbai Indians~10:30am GMT (4:00pm IST), Monday 19th May 2014~Sardar Patel Stadium, Ahmedabad~Sardar Patel Stadium~Rajasthan Royals~Mumbai Indians";
data[44]="2~3~45~Delhi Daredevils vs Kings XI Punjab~2:30pm GMT (8:00pm IST), Monday 19th May 2014~Ferozeshah Kotla, Delhi~Kotla~Delhi Daredevils~Kings XI Punjab";
data[45]="8~7~46~Sunrisers Hyderabad vs Royal Challengers Bangalore~10:30am GMT (4:00pm IST), Tuesday 20th May 2014~Rajiv Gandhi Cricket Stadium, Hyderabad~RGI Stadium~Sunrisers Hyderabad~Royal Challengers Bangalore";
data[46]="4~1~47~Kolkata Knight Riders vs Chennai Super Kings~2:30pm GMT (8:00pm IST), Tuesday 20th May 2014~Eden Gardens, Kolkata~Eden Gardens~Kolkata Knight Riders~Chennai Super Kings";
data[47]="3~5~48~Kings XI Punjab vs Mumbai Indians~2:30pm GMT (8:00pm IST), Wednesday 21st May 2014~Punjab Cricket Association Stadium, Mohali~PCA Stadium~Kings XI Punjab~Mumbai Indians";
data[48]="4~7~49~Kolkata Knight Riders vs Royal Challengers Bangalore~10:30am GMT (4:00pm IST), Thursday 22nd May 2014~Eden Gardens, Kolkata~Eden Gardens~Kolkata Knight Riders~Royal Challengers Bangalore";
data[49]="1~8~50~Chennai Super Kings vs Sunrisers Hyderabad~2:30pm GMT (8:00pm IST), Thursday 22nd May 2014~M. A. Chidambaram Stadium, Chennai~Chidambaram~Chennai Super Kings~Sunrisers Hyderabad";
data[50]="5~2~51~Mumbai Indians vs Delhi Daredevils~10:30am GMT (4:00pm IST), Friday 23rd May 2014~Wankhede Stadium, Mumbai~Wankhede Stadium~Mumbai Indians~Delhi Daredevils";
data[51]="3~6~52~Kings XI Punjab vs Rajasthan Royals~2:30pm GMT (8:00pm IST), Friday 23rd May 2014~Punjab Cricket Association Stadium, Mohali~PCA Stadium~Kings XI Punjab~Rajasthan Royals";
data[52]="7~1~53~Royal Challengers Bangalore vs Chennai Super Kings~10:30am GMT (4:00pm IST), Saturday 24th May 2014~M. Chinnaswamy Stadium, Bengaluru~Chinnaswamy~Royal Challengers Bangalore~Chennai Super Kings";
data[53]="4~8~54~Kolkata Knight Riders vs Sunrisers Hyderabad~2:30pm GMT (8:00pm IST), Saturday 24th May 2014~Eden Gardens, Kolkata~eden Gardens~Kolkata Knight Riders~Sunrisers Hyderabad";
data[54]="3~2~55~Kings XI Punjab vs Delhi Daredevils~10:30am GMT (4:00pm IST), Sunday 25th May 2014~Punjab Cricket Association Stadium, Mohali~PCA Stadium~Kings XI Punjab~Delhi Daredevils";
data[55]="5~6~56~Mumbai Indians vs Rajasthan Royals~2:30pm GMT (8:00pm IST), Sunday 25th May 2014~Wankhede Stadium, Mumbai~Wankhede Stadium~Mumbai Indians~Rajasthan Royals";
data[56]="tbd~tbd~Qualifier 1~TBD vs TBD~2:30pm GMT (8:00pm IST), Tuesday 27th May 2014~M. A. Chidambaram Stadium, Chennai~Chidambaram~All~All";
data[57]="tbd~tbd~Eliminator~TBD vs TBD~2:30pm GMT (8:00pm IST), Wednesday 28th May 2014~M. A. Chidambaram Stadium, Chennai~Chidambaram~All~All";
data[58]="tbd~tbd~Qualifier 2~TBD vs TBD~2:30pm GMT (8:00pm IST), Friday 30th May 2014~Wankhede Stadium, Mumbai~Wankhede Stadium~All~All";
data[59]="tbd~tbd~Final~TBD vs TBD~2:30pm GMT (8:00pm IST), Sunday 1st June 2014~Wankhede Stadium,Mumbai~Wankhede Stadium~All~All";



// JavaScript Document
function AllTeams(val,val2){
//alert(val2);
var table="";



for(var i=0;i<=data.length-1;i++)
{
var allValues=data[i].split("~");	
var n,j;
var finalval=val2;
if(val==1)
{
n = allValues[7];
j = allValues[8];
}
else if(val==2)
{
n = allValues[6];
j = allValues[6];
}
else if(val==3)
{
	n="All";
	j="All";
	
	
}
if((finalval.toUpperCase()==n.toUpperCase())||(finalval.toUpperCase()==j.toUpperCase()))
{
table+="<div id='dynamicData'><table width='40%' align='center' cellpadding='0' cellspacing='0'><tr><td width='26%' height='69' align='center'><div id='small-icon'><img src='imgs/team-"+allValues[0]+".png' /></div></td><td width='49%' align='center'><strong>"+allValues[2]+"</strong></td><td width='25%' align='center'><div id='small-icon'><img src='imgs/team-"+allValues[1]+".png' /></div></td></tr></table><div id='bdr1'></div><strong>"+allValues[3]+"</strong><br />"+allValues[4]+"<br />"+allValues[5]+"</div>";
}
}

//$( "#matter-in" ).load(table);

document.getElementById("matter-in").innerHTML=table;

}
function preet()
{
var k=document.getElementById("name").value="parvinder";
alert(k);
}
