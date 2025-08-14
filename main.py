# Teleport Agent to Player

def on_on_chat():
    agent.teleport_to_player()
    agent.turn(LEFT_TURN)
player.on_chat("Come Here Agent", on_on_chat)

# Make Agent Spin

def on_on_chat2():
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
player.on_chat("Spin!", on_on_chat2)

# Conversation with Agent

def on_on_chat3():
    player.say("Hello Player!")
player.on_chat("Hi Agent!", on_on_chat3)
