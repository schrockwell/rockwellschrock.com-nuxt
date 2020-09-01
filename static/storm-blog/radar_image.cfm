<cfsilent>
	<cfhttp url="http://radar.weather.gov/ridge/Conus/RadarImg/latest_radaronly.gif">
	<cfcontent type="#cfhttp.mimeType#">
</cfsilent>
<cfoutput>#cfhttp.fileContent#</cfoutput>