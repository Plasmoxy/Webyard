import io.javalin.Javalin
import io.javalin.staticfiles.Location
import java.text.SimpleDateFormat
import java.util.*

data class DoubleHolder(val value: Double)
data class StringHolder(val value: String)

fun main(args: Array<String>) {
	val app = Javalin.create()
			.port(80)
			.enableStaticFiles("static", Location.EXTERNAL)
			.start()
	
	
	
	app.post("time") {
		it.json(StringHolder(SimpleDateFormat("hh:mm:ss").format(Date())))
	}
}