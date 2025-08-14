// 
//  Conversation with Agent
player.onChat("Hi Agent!", function on_on_chat() {
    player.say("Hello Player!")
})
// 
//  Teleport Agent to Player
player.onChat("Come Here Agent", function on_on_chat1() {
    agent.teleportToPlayer()
    agent.turn(LEFT_TURN)
})
// 
//  Make Agent Spin
player.onChat("Spin!", function on_on_chat2() {
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
})
