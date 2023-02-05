source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve

# default called for jekyll 3.8.5 but it fails
gem "jekyll", ">= 4.0", "< 4.3"
gem "webrick"

# added the below lines due to error: "bundler: failed to load command: jekyll (/usr/local/lib/ruby/gems/3.1.0/bin/jekyll)
#/usr/local/lib/ruby/gems/3.1.0/gems/kramdown-1.17.0/lib/kramdown/parser/html.rb:10:in `require': cannot load such file -- rexml/# parsers/baseparser (LoadError)"
gem "kramdown"
gem "kramdown-parser-gfm"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
   gem "jekyll-feed", "~> 0.6"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

