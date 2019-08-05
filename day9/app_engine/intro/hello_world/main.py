import webapp2


class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write('<h1>Hello, Yerrr</h1>')

class AboutPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write('this is about')
class Newspage (webapp2.RequestHandler):

    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write('<h1>Trump</h1>')

routes = [('/', MainPage),('/about', AboutPage),('/News',Newspage)]
app = webapp2.WSGIApplication(routes,debug=True)
