# -*- coding: utf-8 -*-
"""
Created on Sun Nov 14 00:56:21 2021

@author: Alexis
"""
perm_dict = {
    "newbie":[
        "/bq_user help",
        "/bq_user refresh",
        "/help",
        "/tell",
        "/chant (witchery)",
        "/afk",
        "/back",
        "/bal (see your money)",
        "/balancetop (shows the richest people on the server, takes time to process)",
        "/compass",
        "/plugins",
        "/depth",
        "/ec",
        "/ext",
        "/getpos",
        "/helpop",
        "/ignore (stop receiving /msg from someone)",
        "/info (bind some debugger on the item you have on hand, then you right-click to get data from blocks)",
        """
        /kits
        <ul align="left" style="padding-left:40px">
            <li>newbie</li>
            <li>stamps 1n</li>
            <li>stamps 20n</li>
            <li>stamps 2n</li>
        </ul>
        """,
        "/list (list the online players with their rank)",
        "/mail (mail system in-game through commands)",
        "/motd (print the message of the day)",
        "/msg",
        "/home",
        "/warp",
        "/pay",
        "/ping (answers pong as soon as received by the server)",
        """
        /powertool (command used to bind commands to an item)
        <ul align="left" style="padding-left:40px">
            <li>append (stack the commands on one item)</li>
            <li>toggle</li>
        </ul>
        """,
        "/realname (see the name of a nicknamed player)",
        """
        custom essentials sign uses:
        <ul align="left" style="padding-left:40px">
            <li>
                can break custom essential signs about:
                <ul align="left" style="padding-left:60px">
                    <li>balance</li>
                    <li>disposal</li>
                    <li>mail</li>
                    <li>protection</li>
                </ul>
            </li>
            <li>
                can create custom essential signs about:
                <ul align="left" style="padding-left:60px">
                    <li>balance</li>
                    <li>disposal</li>
                    <li>mail</li>
                    <li>protection</li>
                </ul>
            </li>
            <li>
                can use custom essential signs about:
                <ul align="left" style="padding-left:60px">
                    <li>balance
                    <li>buy</li>
                    <li>disposal</li>
                    <li>free</li>
                    <li>info</li>
                    <li>kit</li>
                    <li>mail</li>
                    <li>protection</li>
                    <li>sell</li>
                    <li>spawnmob</li>
                    <li>trade</li>
                    <li>warp</li>
                </ul>
            </li>
        </ul>""",
        "/time",
        "/tpa, tpaccept, tpahere",
        "/tptoggle (enable/disable rejecting tp/tpa targettting, staff can still /tpo to tp to them)",
        "/craft (open a crafting table)",
        "chunkloader coin T1 availiable in /jobs shops",
        "/gchelp (link to the gc wiki)",
        "/joinrace (gc command)",
        "/ssinvite (gc command)",
        "/ssuninvite (gc command)",
        "/mvcoord (multiverse commands)",
        "/mvlist",
        "/mvspawn",
        "/mvp list",
        "/iskamiunlocked (thaumic tinkerer)",
        "/rankup (to rank up in the ranks)",
        "/vote yes and /vote no for the server votes",
        "/rg info (tells info about the worldguard region you are currently in)",
        "/ext (short for extinguish, stop the current fire on you)"],
    "nomad":[
            "3 homes",
            """
            Additional custom essential sign perms:
            <ul align="left" style="padding-left:40px>
                <li>can use and create custom "trade" essentials signs</li>
                <li>can use custom essentials signs with "heal"</li>
            </ul>""",
            "can use /mytownweb verify (to link your account to the mtw<server>.gtnewhorizons.com, a website to see stuff about your towns)",
            "/mytown (allows the claiming of chunks)",
            "/foodlist (command to see the progression with unique food eaten)",
            "/vote night, /vote day and /vote rain are now availiable"],
    "dweller":["/vote restart (starts a vote to restart the server, however, always ask an admin to trackdown lag before rebooting the server, as it will hide the issue instead of fixing it)",
"chunkloader coin T2",
"5 homes"],
    "villager":["7 homes"],
    "resident":["9 homes",
                "veto on votes (/vote veto)",
                "chunkloader coin T3"],
    "citizen":["12 homes"],
    "elite":["16 homes",
            "chunkloader coin T4",
            "No more delay between a teleport command and the actual teleport"],
    "nolife":["can place a stargate in the world",
                "/back without monthly goal",
                "/me",
                "/nick (with color and format)",
                "is not counted in the sleep count",
                "can join the full server",
                "can use color and format in chat",
                "chunkloader coin T5"],
    "helper":[],
    "moderator":[],
    "admin":[]
    }
a="""
			<h2 class="title">Ranks and Commands</h2><br>
			<ol align="center" style="-webkit-padding-end:40px">
"""
def rank(name, perms):
    b = f"""
				<h2><li>
                    {name}</h2><br>
        """
    c="""
                    <ul align="left" style="padding-left:20px">
    """+" \n".join([f"\t\t\t\t\t<li>{x}</li>" for x in perms])+"""		
                    </ul>
				</li><br>
                """
    return b+c

d="""
			</ol>
    """


print(a+"\n".join([rank(k,v) for k,v in perm_dict.items()])+d)