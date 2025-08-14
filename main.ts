//  Teleport Agent to Player
player.onChat("Come Here Agent", function on_on_chat() {
    agent.teleportToPlayer()
    agent.turn(LEFT_TURN)
})
//  Make Agent Spin
player.onChat("Spin!", function on_on_chat2() {
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
})
//  Conversation with Agent
player.onChat("Hi Agent!", function on_on_chat3() {
    player.say("Hello Player!")
})
