<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<style type="text/css">
        table { border-collapse: collapse; }
        td { border: solid grey 1px; }
        td.none { border: none; }
</style>

<script>

function checkAnswer(){ 

var sen_info= document.getElementById("sentence_info").value;
//answer_chunk=new Array();
answer_chunk=sen_info.split(" ");
var i;
your_answer=new Array();
flag=0;
for(i=0;i<answer_chunk.length;i++)
{
    your_answer[i]=document.getElementById('token'+i).value;
    
}
//document.getElementById('cor_head').innerHTML='<img src="wrong.png" height="25" width="25" alt="Wrong" /> ';
          	
for (i=0; i<answer_chunk.length;i++)
   {     chunk=answer_chunk[i].split("/");
        
	 if(your_answer[i]!=chunk[2])
          {    	    flag=1;
		    document.getElementById('correction'+i).innerHTML='<img src="wrong.png" style="height:25px; width:25px" alt="Wrong" /> ';
          }
	else     {  document.getElementById('correction'+i).innerHTML='<img src="right.png" style="height:25px; width:25px" alt="Right" /> ';
                     
                  }
                                    
  }
if(flag==1)  document.getElementById("see_soln").innerHTML='<br/> <form action="javascript:correctTable()" > <input type="submit" value="Get Answer" onsubmit="correctTable();" /> </form><br/>';


}
	
function correctTable()				//prints the correct table
{

     var sen_info= document.getElementById("sentence_info").value;
     answer_chunk=sen_info.split(" ");
     var i;
     for(i=0;i<answer_chunk.length;i++)
     {     chunk=answer_chunk[i].split("/");
           document.getElementById('correct'+i).innerHTML=chunk[2];

    
     }
     document.getElementById("see_soln").innerHTML='<br/> <form action="javascript:clearTable()" > <input type="submit" value="Hide Answer" onsubmit="clearTable();" /> </form>';


}

function clearTable()
{
     var sen_info= document.getElementById("sentence_info").value;
     answer_chunk=sen_info.split(" ");
     var i;
     for(i=0;i<answer_chunk.length;i++)
     {   document.getElementById('correct'+i).innerHTML='';

    
     }
     document.getElementById("see_soln").innerHTML='<br/> <form action="javascript:correctTable()" > <input type="submit" value="Get Answer" onsubmit="correctTable();" /> </form><br/>';

}


</script>
</head>
<body>


<center><br/>
<?php 
     
      $lang_opt=$_GET['lang'];
      if(strcmp((string) $lang_opt, "1")==0)
      { $sentence_path="Exp6/Eng-Sen.txt";
        $option_path="Exp6/answer_opt_eng.txt";
      }
      else
      { $sentence_path="Exp6/Hin-Sen.txt";
        $option_path="Exp6/answer_opt_hin.txt";
      }
      $f1 =  fopen($sentence_path, "r");
      $buffer=fread($f1, filesize($sentence_path));
      $options=preg_split('#
#m', $buffer); 
      $sel_sen=$options[$_GET['ind']];
      $sen=preg_split('#&#m',(string) $sel_sen);      
      $question=$sen[0];
      $answer=$sen[1];      
      $answer_chunk=preg_split('# #m', (string) $answer);
      $f2 =  fopen($option_path, "r");
      $buffer2=fread($f2, filesize($option_path));
      $ans_tokens=preg_split('#
#m', $buffer2); 
      
 ?>
      <form action="javascript:checkAnswer()" target="_self" method="post">
      <table cellspacing="-2" cellpadding="4" border="1" style="text-align:center;">
      <?php
      echo "<input type=\"hidden\" name=\"sentence_info\" id=\"sentence_info\" value=\"".$answer."\"/>";
      echo "<th>Lexicon</th><th>POS</th><th>Chunk</th><th id=\"cor_head\"></th><th id=\"ans_head\"></th>"; 
      for($j=0;$j<sizeof($answer_chunk);$j++){ 
      echo "<tr>";
      $part_answer=preg_split('#\/#m',(string) $answer_chunk[$j]);
      echo "<td>$part_answer[0]</td><td> $part_answer[1]</td><td><select name=\"t\" id=\"token".$j."\">";
      for($y=0; $y<count($ans_tokens)-1; $y++)
            echo "<option>".$ans_tokens[$y]."</option>";
      echo "<input type=\"hidden\" name=\"answer".$j."\" id=\"answer".$j."\" value=\"".$part_chunk[2]."\"/>";
      echo "</td><td id= \"correction".$j."\"></td><td id=\"correct".$j."\"></td></tr>";
      
      }
   
      echo "</table>";
      

      ?>
      
<br/>
<center><input type="submit" value="Submit" onsubmit="checkAnswer();"></center> </form>
<center><div id="see_soln"></div></center>
</form>
</center>
</body>
</html>
