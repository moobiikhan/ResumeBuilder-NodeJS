fun main(){
    val a = Array<String>(size = 4) {","}
    val b = Array<String>(size = 4) {","}

    for (i in 0..2){
        a[i] = readLine().toString()}

    for (i in 0..2){
        b[i] = readLine().toString()}

    for (i in a.indices){
        if (a.contentEquals(b)){
            a[a.size-1] = "BSCS"
        }
    }

    for (i in b.indices){
        if (b.contentEquals(a)){
            b[b.size-1] = "BSCS"
        }
    }

    if (b.contentEquals(a)){
        println("Different collection!!")
    }


    println(a.contentToString())
    println(b.contentToString())

}