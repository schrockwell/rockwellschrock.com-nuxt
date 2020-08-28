<template>
  <div>
    <Hero>Curriculum Vitae</Hero>

    <CvSection title="Skills">
      <div class="sm:flex flex-wrap">
        <CvEntry title="Web Front-End" class="sm:w-1/2 md:w-1/3 mb-8">
          <ul>
            <li>Vue.js / Nuxt.js</li>
            <li>Phoenix LiveView</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Electron</li>
            <li>React</li>
          </ul>
        </CvEntry>
        <CvEntry title="Web Back-End" class="sm:w-1/2 md:w-1/3 mb-8">
          <ul>
            <li>Ruby on Rails</li>
            <li>Phoenix / Elixir</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </CvEntry>
        <CvEntry title="DevOps" class="sm:w-1/2 md:w-1/3 mb-8">
          <ul>
            <li>AWS</li>
            <li>Azure</li>
            <li>Packer</li>
            <li>Ubuntu</li>
            <li>Nginx</li>
            <li>Shell Scripting</li>
          </ul>
        </CvEntry>
        <CvEntry title="JavaScript" class="sm:w-1/2 md:w-1/3 mb-8">
          <ul>
            <li>Node.js / ES6</li>
            <li>WebRTC</li>
            <li>WebSockets</li>
            <li>WebAudio</li>
            <li>Canvas</li>
          </ul>
        </CvEntry>
        <CvEntry title="Windows" class="sm:w-1/2 md:w-1/3 mb-8">
          <ul>
            <li>C# / VB.NET / .NET</li>
            <li>MS SQL Server</li>
            <li>Windows Forms</li>
            <li>ASP.NET</li>
            <li>IIS</li>
          </ul>
        </CvEntry>
        <CvEntry title="iOS" class="sm:w-1/2 md:w-1/3 mb-8">
          <ul>
            <li>Objective-C</li>
            <li>Swift</li>
          </ul>
        </CvEntry>
      </div>
    </CvSection>

    <CvSection title="Active Work">
      <div class="space-y-8 md:space-y-16">
        <CvEntry
          title="CTO and Lead Developer"
          subtitle="Remote Ham Radio"
          :date="toThisYear('2013')"
        >
          <p class="mb-para">
            As co-founder and CTO of RemoteHamRadio, independently developed,
            maintained, and supported the full-stack web application, associated
            hardware, and services.
          </p>
          <p class="mb-para">
            The groundbreaking service for amateur radio operators provides
            voice communication and complex remote hardware control in a
            real-time browser dashboard, providing instant access to dozens of
            physical radio installations across the globe. In addition to
            product improvements, fixes, and deployments, I supported the
            day-to-day technical challenges, wrote documentation, and provided
            customer support.
          </p>

          <h4 class="text-h4 mt-4">Front-End</h4>
          <p class="mb-para">
            The primary user interface is a Vue.js SPA that communicates with
            the back-end via WebSockets and RESTful APIs. WebRTC establishes
            voice and data channels to the remote locations, utilizing STUN/TURN
            servers to traverse NATs.
          </p>
          <p class="mb-para">
            An Electron app for Windows and macOS provides customers with the
            ability to connect local software and hardware into the system.
          </p>

          <ul class="list-tech dots-between mb-para">
            <li>Vue.js</li>
            <li>Electron</li>
            <li>WebRTC</li>
            <li>WebSockets</li>
            <li>WebAudio</li>
            <li>Canvas</li>
          </ul>

          <h4 class="text-h4 mt-4">Back-End</h4>
          <p class="mb-para">
            The mesh network of horizontally-scalable, hot-reloadable Phoenix
            servers routes WebSocket traffic between the users and the remote
            sites. Ruby on Rails provides the administrative interface for user
            account management. And it's all backed by PostgreSQL.
          </p>

          <ul class="list-tech dots-between mb-para">
            <li>Phoenix / Elixir</li>
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
          </ul>

          <h4 class="text-h4 mt-4">DevOps</h4>
          <p class="mb-para">
            Web servers run on Ubuntu on AWS EC2 instances, load-balanced for
            performance and redundancy. Deployments are handled by Cloud66 and
            shell scripts, and metrics are piped to AWS CloudWatch and displayed
            in Grafana.
          </p>

          <ul class="list-tech dots-between mb-para">
            <li>EC2</li>
            <li>ELB</li>
            <li>S3</li>
            <li>Route 53</li>
            <li>CloudWatch</li>
            <li>Grafana</li>
            <li>Ubuntu</li>
          </ul>

          <h4 class="text-h4 mt-4">Hardware</h4>
          <p class="mb-para">
            Hardware control is implemented in a Ruby (non-Rails) application
            server, controlling dozens of different devices via serial ports,
            HTTP, TCP, and UDP.
          </p>
          <p class="mb-para">
            Custom hardware was designed from the ground-up for use in-house and
            by customers.
          </p>

          <ul class="list-tech dots-between mb-para">
            <li>Ruby</li>
            <li>WebSockets</li>
            <li>Circuit / PCB Design</li>
          </ul>
        </CvEntry>

        <CvEntry
          title="DevOps Consultant"
          subtitle="Glance Networks"
          :date="toThisYear('2019')"
        >
          <p class="mb-para">
            Assisted the Glance DevOps team with the automation of building,
            deploying, and scaling of Glance server instances on AWS and Azure.
          </p>
          <p class="mb-para">
            Packer was introduced into the build process, facilitating the rapid
            development and deployment of new versions of server software.
          </p>

          <ul class="list-tech dots-between">
            <li>Packer</li>
            <li>AWS</li>
            <li>Azure</li>
            <li>Python</li>
          </ul>
        </CvEntry>

        <CvEntry
          title="Podcast Co-Host"
          subtitle="Does Not Compute"
          :date="toThisYear('2018')"
        >
          <p class="mb-para">
            Recorded over 100 episodes discussing various topics around software
            development, including news, conferences, languages, tools,
            learning, and the occasional off-topic tangent.
          </p>
          <a class="text-link" href="https://dnc.show/">All episodes</a> &ndash;
          <a class="text-link" href="https://twitch.tv/dnccast"
            >Live streaming and recordings</a
          >
        </CvEntry>

        <CvEntry
          title="iOS Developer"
          subtitle="Self-Employed"
          :date="toThisYear('2012')"
        >
          <p class="mb-para">
            Independently developed and supported utility applications for
            amateur radio operators.
          </p>

          <ul>
            <li class="mb-para">
              <a class="text-link" href="https://www.ww1x.com/waveguide/"
                >WaveGuide</a
              >
            </li>
            <li class="mb-para">
              <a class="text-link" href="https://www.ww1x.com/sotagoat/"
                >SOTA Goat</a
              >
            </li>
          </ul>

          <ul class="list-tech dots-between">
            <li>Objective-C</li>
            <li>Swift</li>
            <li>Elixir/Phoenix</li>
          </ul>
        </CvEntry>

        <CvEntry
          title="Web App Consultant"
          subtitle="Self-Employed"
          :date="toThisYear('2012')"
        >
          <p class="mb-para">
            Developed and supported various applications for businesses,
            municipalities, and individuals.
          </p>

          <ul>
            <li class="mb-para">Essign</li>
            <li class="mb-para">ThermaCalc</li>
            <li class="mb-para">EquipNV</li>
            <li class="mb-para">Beluga</li>
          </ul>

          <ul class="list-tech dots-between">
            <li>Ruby/Rails</li>
            <li>Elixir/Phoenix</li>
            <li>C#/.NET/WinForms</li>
          </ul>
        </CvEntry>
      </div>
    </CvSection>

    <CvSection title="Past Work">
      <div class="space-y-8 md:space-y-16">
        <CvEntry
          title="Firmware Developer"
          subtitle="Keysight Technologies"
          date="2013 – 2014"
        >
          <p class="mb-para">
            Developed software for electronic test equipment running on Windows.
          </p>
          <p class="mb-para">
            On the Physics team for
            <a
              class="text-link"
              href="https://www.keysight.com/en/pcx-x205200/x-series-signal-analyzers?&cc=US&lc=eng"
              >X-Series signal analyzers</a
            >, implemented feature requests and bug fixes, interfaced with
            <a
              class="text-link"
              href="https://www.keysight.com/en/pc-2033178/smart-harmonic-mixers?cc=US&lc=eng"
              >USB peripherals</a
            >
            , and developed all-new hardware-acclerated measurements in FPGAs.
          </p>
          <p class="mb-para">
            Also provided on-site technical support to international customers
            to increase throughput of IC manufacturing with custom solutions to
            reduce testing time.
          </p>
          <ul class="list-tech dots-between">
            <li>C#/.NET</li>
            <li>C++</li>
            <li>MSSQL</li>
            <li>Verilog</li>
            <li>DSP</li>
          </ul>
        </CvEntry>

        <CvEntry
          title="Educational Content Creator"
          subtitle="NOAA"
          date="2009"
        >
          <p class="mb-para">
            Created
            <a class="text-link italic" href="https://vimeo.com/5911007"
              >Cooking Up a Storm</a
            >, an 8-minute educational video for NOAA's
            <a class="text-link" href="https://sos.noaa.gov/What_is_SOS/"
              >Science On a Sphere</a
            >
            program, as part of NOAA's Hollings undergraduate summer internship.
          </p>
          <ul class="list-tech dots-between">
            <li>Adobe After Effects</li>
          </ul>
        </CvEntry>

        <CvEntry
          title="Web Developer"
          subtitle="C4.net Internet Services"
          date="2004 – 2006"
        >
          <p class="mb-para">
            Developed web applications for local businesses and for internal use
            as a summer job.
          </p>
          <ul class="list-tech dots-between">
            <li>ColdFusion</li>
            <li>ASP.NET</li>
            <li>IIS</li>
          </ul>
        </CvEntry>
      </div>
    </CvSection>

    <CvSection title="Appearances">
      <div class="space-y-8 md:space-y-16">
        <CvEntry title="Lightning Talk" subtitle="ElixirConf" date="2017">
          <a
            class="text-link italic"
            href="https://www.youtube.com/watch?v=Ty6rkz7eg6Y"
            >Elixir Tips: A Year of Tiny Explosions</a
          >
        </CvEntry>

        <CvEntry
          title="Conference Talk"
          subtitle="IEEE International Geoscience and Remote Sensing Symposium (IGARSS)"
          date="2012"
        >
          <a
            class="text-link italic"
            href="https://ieeexplore.ieee.org/document/6350711"
            >An airborne 35 GHz radar interferometer in development at the
            university of Massachusetts</a
          >
        </CvEntry>

        <CvEntry title="Book Interview" subtitle="Make:" date="2005">
          Featured in
          <a
            class="text-link italic"
            href="https://www.amazon.com/Makers-Amazing-Garages-Basements-Backyards/dp/0596101880"
            >Makers: All Kinds of People Making Amazing Things In Garages,
            Basements, and Backyards</a
          >, by Bob Parks.
        </CvEntry>
      </div>
    </CvSection>

    <CvSection title="Education">
      <div class="space-y-8 md:space-y-16">
        <CvEntry
          title="M.S. Electrical and Computer Engineering"
          subtitle="University of Massachusetts, Amherst, MA"
          date="2012"
        >
          <a
            class="text-link italic block mb-para"
            href="https://scholarworks.umass.edu/theses/1011/"
            >Integration And Measurements of a Ka-Band Interferometric Radar in
            an Airborne Platform</a
          >
          <ul class="list-tech dots-between">
            <li>MATLAB</li>
            <li>LabView</li>
            <li>LaTeX</li>
            <li>DSP</li>
          </ul>
        </CvEntry>

        <CvEntry
          title="B.S. Computer Engineering"
          subtitle="University of Connecticut, Storrs, CT"
          date="2010"
        >
          <p>Mathematics Minor, Summa Cum Laude, Honors Program</p>
        </CvEntry>
      </div>
    </CvSection>

    <CvSection title="Hobbies">
      <h3 class="text-h3">Flying</h3>
      <p class="mb-4">Private Pilot Certificate, Piper Archer II Co-Owner</p>

      <h3 class="text-h3">Amateur Radio</h3>
      <p class="mb-4">
        Amateur Extra License, SOTA, Satellites, DXing, Remoting
      </p>

      <h3 class="text-h3">Woodworking</h3>
    </CvSection>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rockwell Schrock // CV"
    };
  },

  methods: {
    toThisYear(year) {
      return `${year} – Present`;
    }
  }
};
</script>

<style></style>
