<cfsilent>
	<cfhttp url="http://www.spotternetwork.org/feeds/gr.txt">
	<cfcontent type="#cfhttp.mimeType#">
</cfsilent>
<cfoutput>#cfhttp.fileContent#</cfoutput>