import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

const DocumentationDetails = () => {
  const { id } = useParams();

  // Enhanced mock data with comprehensive content
  const tutorialDetails = {
    1: {
      title: "How to Build a High-Performance Leela Cluster",
      image:
        "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&h=400&fit=crop",
      readTime: "15 min read",
      difficulty: "Intermediate",
      category: "Hardware & Networking",
      author: "Aaklan Tech Team",
      publishedDate: "November 24, 2024",
      lastUpdated: "December 1, 2024",
      prerequisites: [
        "Basic Linux knowledge",
        "3+ Leela boards",
        "Network switch",
        "MicroSD cards",
      ],
      toolsRequired: [
        "Leela By Aaklan boards",
        "Ethernet cables",
        "Power supply",
        "HDMI cable for setup",
      ],

      content: `
        <h2>🚀 Introduction to Leela Clusters</h2>
        <p>A <strong>Leela By Aaklan cluster</strong> is a powerful, low-cost distributed computing system that enables you to tackle complex computational tasks. Whether you're running web servers, data analysis, or machine learning models, clustering multiplies your computing power while maintaining energy efficiency.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="text-blue-800"><strong>💡 Pro Tip:</strong> Start with 3 nodes for learning, then scale up as needed. Each additional node increases both computing power and complexity.</p>
        </div>

        <h3>📋 What You'll Need</h3>
        <ul>
          <li><strong>3-5 Leela By Aaklan boards</strong> (Model 4B recommended)</li>
          <li><strong>Gigabit Ethernet switch</strong> for optimal network performance</li>
          <li><strong>Stable power supply</strong> with adequate amperage</li>
          <li><strong>MicroSD cards</strong> (32GB Class 10 or higher recommended)</li>
          <li><strong>CAT6 Ethernet cables</strong> for reliable connectivity</li>
          <li><strong>Cluster case or rack</strong> (optional but recommended)</li>
          <li><strong>Heat sinks and cooling</strong> for sustained performance</li>
        </ul>

        <h2>🔧 Hardware Setup</h2>
        
        <h3>Step 1: Physical Assembly</h3>
        <p><strong>Node Arrangement:</strong> Arrange your Leela boards in a stack or rack. Ensure proper ventilation between boards to prevent overheating.</p>
        <p><strong>Network Configuration:</strong> Connect all boards to your Ethernet switch. Use consistent port numbering for easy identification.</p>
        <p><strong>Power Management:</strong> Use a powered USB hub or individual power supplies. Avoid daisy-chaining power to prevent voltage drops.</p>

        <h3>Step 2: Initial Board Setup</h3>
        <p>For each Leela board:</p>
        <ol>
          <li>Flash the latest LeelaOS to your microSD card using Aaklan Imager</li>
          <li>Enable SSH by creating an empty file named 'ssh' in the boot partition</li>
          <li>Configure wireless networking if needed (though Ethernet is preferred for stability)</li>
          <li>Set unique hostnames: leela-master, leela-worker-1, leela-worker-2, etc.</li>
        </ol>

        <h2>⚙️ Software Configuration</h2>

        <h3>Step 3: System Preparation</h3>
        <p>Update all packages on each node:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo apt update && sudo apt upgrade -y<br/>
          sudo reboot
        </div>

        <h3>Step 4: SSH Key Setup</h3>
        <p>Generate SSH keys on the master node and distribute to workers:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          ssh-keygen -t rsa -b 4096<br/>
          ssh-copy-id leela@leela-worker-1<br/>
          ssh-copy-id leela@leela-worker-2<br/>
          # Repeat for all worker nodes
        </div>

        <h3>Step 5: Network Configuration</h3>
        <p>Configure static IP addresses for reliable node communication:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          # Edit /etc/dhcpcd.conf on each node<br/>
          interface eth0<br/>
          static ip_address=192.168.1.10/24<br/>
          static routers=192.168.1.1<br/>
          static domain_name_servers=192.168.1.1 8.8.8.8
        </div>

        <h2>🐳 Docker Swarm Setup</h2>

        <h3>Step 6: Initialize Docker Swarm</h3>
        <p>On the master node, initialize the swarm:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          docker swarm init --advertise-addr 192.168.1.10
        </div>

        <h3>Step 7: Join Worker Nodes</h3>
        <p>Use the join token from the master output to add worker nodes:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          docker swarm join --token SWMTKN-1-xxx 192.168.1.10:2377
        </div>

        <h3>Step 8: Verify Cluster Status</h3>
        <p>Check that all nodes have joined successfully:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          docker node ls
        </div>

        <h2>🚀 Deploy Your First Service</h2>

        <h3>Step 9: Create a Sample Application</h3>
        <p>Deploy a simple web service to test your cluster:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          docker service create --name web --replicas 3 -p 80:80 nginx:alpine
        </div>

        <h3>Step 10: Verify Service Deployment</h3>
        <p>Check that containers are running across your cluster:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          docker service ps web<br/>
          curl http://192.168.1.10
        </div>

        <h2>🔍 Monitoring and Maintenance</h2>

        <h3>Cluster Monitoring</h3>
        <p>Set up monitoring with Portainer for web-based management:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          docker volume create portainer_data<br/>
          docker run -d -p 9000:9000 --name portainer --restart always \<br/>
          -v /var/run/docker.sock:/var/run/docker.sock \<br/>
          -v portainer_data:/data portainer/portainer
        </div>

        <h3>Performance Optimization</h3>
        <ul>
          <li><strong>Overclocking:</strong> Carefully overclock for better performance (monitor temperatures)</li>
          <li><strong>Storage:</strong> Use SSD via USB 3.0 for I/O intensive applications</li>
          <li><strong>Network:</strong> Ensure gigabit Ethernet for inter-node communication</li>
        </ul>

        <h2>⚠️ Troubleshooting Common Issues</h2>

        <h3>Node Communication Problems</h3>
        <p><strong>Symptoms:</strong> Nodes showing as 'Down' in swarm</p>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>Check physical network connections</li>
          <li>Verify firewall settings (ports 2377, 7946, 4789)</li>
          <li>Ensure consistent time synchronization</li>
        </ul>

        <h3>Resource Constraints</h3>
        <p><strong>Symptoms:</strong> Services failing to start or randomly restarting</p>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>Monitor memory usage with 'free -h'</li>
          <li>Add swap space if needed</li>
          <li>Limit service resource usage with Docker constraints</li>
        </ul>

        <h2>🎯 Advanced Configurations</h2>

        <h3>Load Balancing</h3>
        <p>Set up Traefik for automatic load balancing:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          docker network create --driver overlay traefik-public<br/>
          # Deploy Traefik stack with proper configuration
        </div>

        <h3>Persistent Storage</h3>
        <p>Configure NFS or GlusterFS for shared storage across nodes:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          # Install and configure NFS server on master<br/>
          # Mount shared volumes on worker nodes
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p class="text-green-800"><strong>🎉 Congratulations!</strong> You now have a fully functional Leela cluster ready for production workloads. Consider implementing backup strategies and monitoring alerts for production use.</p>
        </div>
      `,
    },

    2: {
      title: "Build a Secure Wi-Fi Hotspot with Leela By Aaklan",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=400&fit=crop",
      readTime: "12 min read",
      difficulty: "Beginner",
      category: "Networking & Security",
      author: "Aaklan Security Team",
      publishedDate: "November 20, 2024",
      lastUpdated: "November 28, 2024",
      prerequisites: ["Basic Linux commands", "Leela board", "Wi-Fi adapter"],
      toolsRequired: [
        "Leela By Aaklan board",
        "USB Wi-Fi adapter",
        "Ethernet cable",
        "Power supply",
      ],

      content: `
        <h2>🌐 Introduction to Leela Hotspot</h2>
        <p>Transform your <strong>Leela By Aaklan</strong> into a powerful, secure Wi-Fi hotspot that can bridge networks, provide guest access, or create isolated wireless networks. Perfect for travel, events, or enhancing your home network security.</p>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p class="text-yellow-800"><strong>⚠️ Important:</strong> Ensure you have legal permission to operate a Wi-Fi hotspot in your region and comply with local regulations.</p>
        </div>

        <h3>📋 Required Components</h3>
        <ul>
          <li><strong>Leela By Aaklan board</strong> (any model with USB ports)</li>
          <li><strong>Compatible USB Wi-Fi adapter</strong> with AP mode support</li>
          <li><strong>Stable power supply</strong> (2.5A+ recommended)</li>
          <li><strong>MicroSD card</strong> (8GB minimum, 16GB recommended)</li>
          <li><strong>Ethernet cable</strong> for wired uplink</li>
          <li><strong>Heat sink</strong> (recommended for 24/7 operation)</li>
        </ul>

        <h2>🔧 Hardware Setup</h2>

        <h3>Step 1: Wi-Fi Adapter Selection</h3>
        <p>Choose a compatible USB Wi-Fi adapter that supports Access Point mode:</p>
        <ul>
          <li><strong>Recommended:</strong> TP-Link TL-WN722N, Panda PAU05, or similar</li>
          <li><strong>Check compatibility:</strong> Ensure chipset drivers are available in LeelaOS</li>
          <li><strong>Dual-band:</strong> Consider 5GHz adapters for less interference</li>
        </ul>

        <h3>Step 2: Physical Setup</h3>
        <p>Connect your components:</p>
        <ol>
          <li>Insert microSD card with LeelaOS</li>
          <li>Connect USB Wi-Fi adapter to USB port</li>
          <li>Connect Ethernet cable for internet access</li>
          <li>Attach power supply last</li>
        </ol>

        <h2>⚙️ Software Configuration</h2>

        <h3>Step 3: Initial System Setup</h3>
        <p>Boot your Leela board and complete basic configuration:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo raspi-config<br/>
          # Set hostname: leela-hotspot<br/>
          # Change default password<br/>
          # Expand filesystem<br/>
          # Enable SSH
        </div>

        <h3>Step 4: Update System</h3>
        <p>Ensure all packages are up to date:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo apt update<br/>
          sudo apt upgrade -y<br/>
          sudo reboot
        </div>

        <h3>Step 5: Install Required Packages</h3>
        <p>Install hostapd and dnsmasq for hotspot functionality:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo apt install hostapd dnsmasq iptables-persistent -y
        </div>

        <h2>📡 Access Point Configuration</h2>

        <h3>Step 6: Configure hostapd</h3>
        <p>Create and configure the hostapd configuration file:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo nano /etc/hostapd/hostapd.conf
        </div>
        <p>Add the following configuration:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          interface=wlan0<br/>
          driver=nl80211<br/>
          ssid=Leela-Hotspot<br/>
          hw_mode=g<br/>
          channel=7<br/>
          wmm_enabled=0<br/>
          macaddr_acl=0<br/>
          auth_algs=1<br/>
          ignore_broadcast_ssid=0<br/>
          wpa=2<br/>
          wpa_passphrase=SecurePassword123<br/>
          wpa_key_mgmt=WPA-PSK<br/>
          wpa_pairwise=TKIP<br/>
          rsn_pairwise=CCMP
        </div>

        <h3>Step 7: Configure hostapd Service</h3>
        <p>Update hostapd to use our configuration file:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo nano /etc/default/hostapd<br/>
          # Add: DAEMON_CONF="/etc/hostapd/hostapd.conf"
        </div>

        <h3>Step 8: Configure dnsmasq</h3>
        <p>Backup original config and create new one:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig<br/>
          sudo nano /etc/dnsmasq.conf
        </div>
        <p>Add DNS and DHCP configuration:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          interface=wlan0<br/>
          dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h<br/>
          domain=leela.local<br/>
          address=/gw.leela.local/192.168.4.1
        </div>

        <h2>🔗 Network Bridge Setup</h2>

        <h3>Step 9: Configure Network Interfaces</h3>
        <p>Configure static IP for the access point:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo nano /etc/dhcpcd.conf<br/>
          # Add at end:<br/>
          interface wlan0<br/>
          static ip_address=192.168.4.1/24<br/>
          nohook wpa_supplicant
        </div>

        <h3>Step 10: Enable IP Forwarding</h3>
        <p>Configure the system to forward traffic between interfaces:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo nano /etc/sysctl.conf<br/>
          # Uncomment: net.ipv4.ip_forward=1
        </div>

        <h3>Step 11: Configure NAT with iptables</h3>
        <p>Set up network address translation:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE<br/>
          sudo iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT<br/>
          sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT<br/>
          sudo sh -c "iptables-save > /etc/iptables.ipv4.nat"
        </div>

        <h2>🚀 Service Activation</h2>

        <h3>Step 12: Enable and Start Services</h3>
        <p>Enable all services to start automatically:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo systemctl unmask hostapd<br/>
          sudo systemctl enable hostapd<br/>
          sudo systemctl enable dnsmasq<br/>
          sudo systemctl start hostapd<br/>
          sudo systemctl start dnsmasq
        </div>

        <h3>Step 13: Final Reboot</h3>
        <p>Reboot to ensure all services start correctly:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo reboot
        </div>

        <h2>🔒 Security Enhancements</h2>

        <h3>Step 14: Client Isolation</h3>
        <p>Prevent clients from communicating with each other:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo iptables -I FORWARD -i wlan0 -o wlan0 -j DROP
        </div>

        <h3>Step 15: Bandwidth Limiting</h3>
        <p>Implement traffic shaping to prevent abuse:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo apt install wondershaper<br/>
          sudo wondershaper wlan0 1024 256
        </div>

        <h3>Step 16: MAC Address Filtering</h3>
        <p>Restrict access to specific devices (optional):</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          # In /etc/hostapd/hostapd.conf<br/>
          macaddr_acl=1<br/>
          accept_mac_file=/etc/hostapd/hostapd.accept
        </div>

        <h2>📊 Monitoring and Management</h2>

        <h3>Step 17: Install Web Interface</h3>
        <p>Set up a simple web interface for management:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo apt install nginx php-fpm -y<br/>
          # Configure nginx to serve management interface
        </div>

        <h3>Step 18: Connection Monitoring</h3>
        <p>Monitor connected clients and bandwidth usage:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          watch -n 5 'arp -a | grep wlan0'<br/>
          # Monitor connected devices
        </div>

        <h2>⚠️ Troubleshooting</h2>

        <h3>Common Issues and Solutions</h3>
        
        <p><strong>Hotspot not appearing:</strong></p>
        <ul>
          <li>Check Wi-Fi adapter compatibility</li>
          <li>Verify hostapd service is running: <code>sudo systemctl status hostapd</code></li>
          <li>Check configuration file syntax</li>
        </ul>

        <p><strong>Clients can't get IP address:</strong></p>
        <ul>
          <li>Verify dnsmasq service status</li>
          <li>Check DHCP range configuration</li>
          <li>Ensure wlan0 has correct IP address</li>
        </ul>

        <p><strong>No internet access:</strong></p>
        <ul>
          <li>Verify IP forwarding is enabled</li>
          <li>Check iptables rules</li>
          <li>Ensure eth0 has internet connectivity</li>
        </ul>

        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p class="text-green-800"><strong>🎉 Success!</strong> Your Leela hotspot is now operational. Test by connecting a device to 'Leela-Hotspot' with the password 'SecurePassword123'. Consider changing default credentials for security.</p>
        </div>

        <h2>🔧 Advanced Features</h2>

        <h3>Captive Portal</h3>
        <p>Set up a login page for guest access:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo apt install nodogsplash -y<br/>
          # Configure captive portal
        </div>

        <h3>VPN Integration</h3>
        <p>Route all hotspot traffic through a VPN:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo apt install openvpn -y<br/>
          # Configure VPN client and routing
        </div>

        <h3>Quality of Service (QoS)</h3>
        <p>Prioritize certain types of traffic:</p>
        <div class="bg-gray-800 text-green-400 p-4 rounded-lg my-4 font-mono text-sm">
          sudo tc qdisc add dev wlan0 root handle 1: htb default 10<br/>
          # Add traffic classes for prioritization
        </div>
      `,
    },
  };

  const tutorial = tutorialDetails[id] || tutorialDetails[1];

  return (
    <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/documentation"
            className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Tutorials
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-semibold">
              {tutorial.category}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              {tutorial.difficulty}
            </span>
            <span className="text-gray-500 text-sm">{tutorial.readTime}</span>
            <span className="text-gray-400 text-sm">
              Updated: {tutorial.lastUpdated}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-blue-600 bg-clip-text text-transparent mb-4">
            {tutorial.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                AT
              </div>
              <div>
                <p className="font-semibold text-gray-800">{tutorial.author}</p>
                <p className="text-gray-500 text-sm">
                  Published: {tutorial.publishedDate}
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Save
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </motion.header>

        {/* Prerequisites & Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              Prerequisites
            </h3>
            <ul className="space-y-2">
              {tutorial.prerequisites.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
              </svg>
              Tools Required
            </h3>
            <ul className="space-y-2">
              {tutorial.toolsRequired.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={tutorial.image}
            alt={tutorial.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: tutorial.content }}
          />
        </motion.article>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Community
              </button>
              <button className="px-4 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Ask Questions
              </button>
              <button className="px-4 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Report Issue
              </button>
            </div>
          </div>
        </motion.section>

        {/* Related Tutorials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Related Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((relatedId) => (
              <Link
                key={relatedId}
                to={`/documentation/${relatedId}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {tutorialDetails[relatedId]?.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {tutorialDetails[relatedId]?.readTime} •{" "}
                  {tutorialDetails[relatedId]?.difficulty}
                </p>
                <span className="text-red-600 font-semibold text-sm hover:text-red-700 transition-colors inline-flex items-center">
                  Read more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="mb-6 text-lg">
              Join thousands of developers building innovative projects with
              Leela By Aaklan.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                View All Tutorials
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Support
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DocumentationDetails;
