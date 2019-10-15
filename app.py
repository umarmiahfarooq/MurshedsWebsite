from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/videos")
def videos():
    return render_template("videos.html")

@app.route("/enquiries")
def enquiries():
    return render_template("enquiries.html")

if __name__ == "__main__":
    app.run()