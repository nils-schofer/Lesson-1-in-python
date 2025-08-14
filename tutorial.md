# Lesson 1: In Python

```python-template
#
# Conversation with Agent
def on_on_chat():
    player.say("Hello Player!")
player.on_chat("Hi Agent!", on_on_chat)

#
# Teleport Agent to Player
def on_on_chat1():
    agent.teleport_to_player()
    agent.turn(LEFT_TURN)
player.on_chat("Come Here Agent", on_on_chat1)

#
# Make Agent Spin
def on_on_chat2():
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
player.on_chat("Spin!", on_on_chat2)

```

## Code a Coversation with the Agent

Look at the hint to see what the code looks like in Blocks

```blocks
player.onChat("Hi Agent!", function() {
    player.say("Hello Player!")
})

```

## Code a Coversation with the Agent

Look at the hint to see what the code looks like in Blocks

```blocks
player.onChat("Come Here Agent!", function() {
    agent.teleportToPlayer()
})
```

## Have the again Spin Around

Look at the hint to see what the code looks like in Blocks

```blocks
player.onChat("Spin!", function() {
    agent.turn(TurnDirection.Left)
    agent.turn(TurnDirection.Left)
    agent.turn(TurnDirection.Left)
    agent.turn(TurnDirection.Left)
})
```