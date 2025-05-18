# Kindle Modding Wiki

## Getting Started

This project is a static website built with [Jekyll](https://jekyllrb.com/) using the [just-the-docs](https://just-the-docs.com/) theme.

### Prerequisites
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Bundler](https://bundler.io/)

### Installation
1. **Install Bundler**
   - Open a terminal (PowerShell or Command Prompt) and run:
     ```sh
     gem install bundler
     ```
2. **Install project dependencies**
   - In the project directory, run:
     ```sh
     bundle install
     ```

## Development

To run the site locally for development:

1. In the project directory, start the Jekyll server:
   ```sh
   bundle exec jekyll serve
   ```
2. Open your browser and go to [http://localhost:4000](http://localhost:4000)

The site will automatically reload when you save changes to files.

## Troubleshooting
- If you have problems installing the `wdm` gem on Windows, you can comment out or remove the `gem "wdm"` line in your `Gemfile`. This gem is optional and not required for the site to work.
---

For more information, see the [Jekyll documentation](https://jekyllrb.com/docs/).