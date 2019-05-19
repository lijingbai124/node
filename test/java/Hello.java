public class Hello{
    public static void main(String[] args) {
        System.out.println("大家好啊");
        Hello.say("李敬白");
    }

    public static void say(String name){
        System.out.println("你好："+name);
    }
}