# -*- coding: utf-8 -*-
a = """
			<ul align="left" style="-webkit-padding-end:40px">
"""

b = """
            <li><h4>...</h4></li><br>"""
c = """
        </ul>"""
plugins = ["Auto Save World", "Boo's Cooldowns", "ClearLag", "Disable Commands Plus", "DiscordSRV", "Essentials", "Item Restrict", "Jobs", "MTP Plugin-CmB", "Offline Teleporter", "OpenInv", "Prism", "Server List Plus", "Vanish No Packet", "Vote", "World Edit", "World Guard", "Zav's Auto Messager"]
print(a+"\n".join([b.replace("...", x) for x in plugins])+c)