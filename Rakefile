task default: [:haml]

namespace :haml do
  require 'haml'

  def convert file, destination
    base_name = File.basename(file, '.haml') + '.html'
    html = File.open(file, 'r') { |f| Haml::Engine.new(f.read).render }
    File.open(File.join(destination, base_name), 'w') { |f| f.write html }
  end

  desc 'Parse haml layout files'
  task :layouts do
    Dir.glob('_layouts/_haml/*.haml') do |path|
      convert path, '_layouts'
    end
    puts 'Parsed haml layout files'
  end

  desc 'Parse haml include files'
  task :includes do
    Dir.glob('_includes/_haml/*.haml') do |path|
      convert path, '_includes'
    end
    puts 'Parsed haml include files'
  end

  desc 'Parse haml index files'
  task :indexes do
    Dir.glob('**/index.haml') do |path|
      convert path, File.dirname(path)
    end
    puts 'Parsed haml index files'
  end
end

desc 'Parse all haml items'
task haml: ['haml:layouts', 'haml:includes', 'haml:indexes']

