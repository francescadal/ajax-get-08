require_relative 'lib/cars_service'

#Serve static files, (html, js, css, ...)
root = "public"
urls = Dir.glob("#{root}/*").map { |fn| fn.gsub(/#{root}/, '')}
puts "urls are #{urls}"

use Rack::Static,
    :urls => urls,
    :root => root,
    :index => 'index.html',
    :header_rules => [[:all, {'Cache-Control' => 'public, max-age=3600'}]]

# Serve Car Resources
map "/cars" do
  run CarsApp::CarsService.new
end

# Handle unknown URLs
headers = {'Content-Type' => 'text/html', 'Content-Length' => '9'}
run lambda { |env| [404, headers, ['Not Found']] }
