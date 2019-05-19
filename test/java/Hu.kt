fun main(args: Array<String>) {
    println("########");
    say("测试一下");
    val d:Int=sum(3,8);
    println(d);
    
}

fun say(a:String){
    println("say good"+a);
}

fun sum(a: Int, b: Int): Int {   // Int 参数，返回值 Int
    return a + b
}