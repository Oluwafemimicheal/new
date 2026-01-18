
const Html = () => {
  return (
    <div>
      <section>
        <h1>Module 1: Introduction to HTML</h1>
        <h2>HTML stands for HyperText Markup Language.</h2>
        <p>HTML is the language used to build the structure of websites.
          It tells the web browser what to display — text, images, links, videos, buttons, forms, etc.</p>
        <div className="mt-5">
          <h2>Basic Structure of an HTML Document</h2>
          <pre className="bg-gray-100 text-gray-700 p-4 rounded-md my-4">
            <code>
              &lt;!DOCTYPE html&gt;<br />
              &lt;html&gt;<br />
              &lt;head&gt;<br />
              &lt;title&gt;My First Webpage&lt;/title&gt;<br />
              &lt;/head&gt;<br />
              &lt;body&gt;<br />
              &lt;h1&gt;Hello World!&lt;/h1&gt;<br />
              &lt;/body&gt;<br />
              &lt;/html&gt;
            </code>
          </pre>
          <ul>
            <h2>Explanation:</h2>
            <li> &lt;!DOCTYPE html&gt; → tells the browser to use HTML5</li>
            <li> &lt;html&gt; → Root element of the page</li>
            <li> &lt;head&gt; → contains metadata and page information (not visible on page)</li>
            <li> &lt;title&gt; → page title shown in browser tab</li>
            <li> &lt;body&gt; → visible content of the webpage</li>
          </ul>
        </div>

      </section>
      <section className="mt-10">
        <h1>HTML Elements and Tags</h1>
        <h2>Basic Syntax</h2>
        <ul>
          <li>Opening tag: &lt;h1&gt;</li>
          <li>Closing tag: &lt;/h1&gt;</li>
          <li>Self-closing tag:  &lt;input/&gt;</li>
          <li>Element with tag: &lt;h1&gt;Hello World&lt;h1/&gt;</li>
        </ul>
        <div className="mt-2">
          <h2>Attributes</h2>
          <ul>
            <li>Opening tag: &lt;h1&gt;</li>
            <li>Closing tag: &lt;/h1&gt;</li>
            <li>Self-closing tag:  &lt;input/&gt;</li>
            <li>Element with tag: &lt;h1&gt;Hello World&lt;h1/&gt;</li>
          </ul>
        </div>
        <div className="mt-2">
          <h1>Text Elements</h1>
          <div>
            <h2>Headings</h2>
            <pre className="bg-gray-100 text-gray-700 p-4 rounded-md m2-4">
              <code>
                &lt;h1&gt;Main Heading&lt;/h1&gt;<br />
                &lt;h2&gt;Sub Heading&lt;/h2&gt;<br />
                &lt;h3&gt;Section Heading&lt;/h3&gt;<br />
                &lt;h4&gt;Subsection Heading&lt;/h4&gt;<br />
                &lt;h5&gt;Minor Heading&lt;/h5&gt;<br />
                &lt;h6&gt;Smallest Heading&lt;/h6&gt;
              </code>
            </pre>
          </div>
          <div className="mt-2">
            <h2>Text Formatting</h2>
            <pre className="bg-gray-100 text-gray-700 p-4 rounded-md my-2">
              &lt;p&gt;Paragraph text&lt;/p&gt;<br />
              &lt;br/&gt; Line break<br />
              &lt;hr/&gt;Horizontal rule<br /><br />

              <h2>Text Styling</h2>
              &lt;strong&gt;Bold text&lt;/strong&gt;<br />
              &lt;b&gt;Bold text (Visual only)&lt;/b&gt;<br />
              &lt;em&gt;Emphasized text&lt;/em&gt;<br />
              &lt;i&gt;italic&lt;/i&gt;<br />
              &lt;u&gt;Underline text&lt;/u&gt;<br />
              &lt;mark&gt;Highlighted text&lt;/mark&gt;<br />
              &lt;del&gt;Deleted text&lt;/del&gt;<br />
              &lt;ins&gt;Inserted text&lt;/ins&gt;<br />
              &lt;sub&gt;Subscript&lt;/sub&gt;<br />
              &lt;sup&gt;Superscript&lt;/sup&gt;<br />
              &lt;small&gt;Small text&lt;/small&gt;<br />
              &lt;code&gt;code snippet&lt;/code&gt;<br />
              &lt;samp&gt;Sample output&lt;/samp&gt;<br />
            </pre>
          </div>
          <div className="mt-2">
            <h2>Preformatted Text</h2>
            <pre className="bg-gray-100 text-gray-700 p-4 rounded-md my-2">
              &lt;pre&gt;<br/> Preformatted text <br /> preserve spaces <br /> and line breaks <br/>&lt;/pre&gt;<br />
             
              <br/>
              &lt;blockquote <span className="text-amber-700">cite="source"</span>&gt;<br />This is a quote from another source<br />&lt;/blockquote&gt;<br />
            
            </pre>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Html
