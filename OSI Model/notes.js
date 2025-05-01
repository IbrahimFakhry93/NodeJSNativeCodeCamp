//! Watch List – OSI Model

//^ look up slides

//* OSI: open system interconnection

//& Network Devices:

//~ Modem:

//* modem connects you with internet
//* modem receives the signal

//& Title: Understanding How a Modem Works

//? 1. Modem's Role in Internet Connection
//* The modem is responsible for connecting you to the internet.
//* It acts as a bridge between your local network (home router, laptop) and your ISP (Internet Service Provider): internet company (WE)

//? 2. Modem Receiving Signals
//* The modem receives signals from the ISP over a physical medium (such as fiber, DSL, or cable).
//* These signals can be either digital or analog, depending on the technology used.

//? 3. Signal Conversion
//* Traditional dial-up modems converted **digital signals to analog** for phone-line transmission.
//* Modern broadband modems mainly convert signals between **different digital formats**, NOT analog.

//? 4. Difference Between Old and New Modems
//* **Dial-up Modems**: Convert digital signals from the computer to analog for transmission over phone lines.
//* **Broadband Modems**: Handle only digital signals, converting between various digital encoding techniques.

//^===================================

//~ Router:
//* router:  network gate after modem
//* it receives data that relates to its connected network and refuse other data
//& Title: Understanding the Role of a Router

//? 1. What is a Router?
//* A router acts as a network gateway, positioned after the modem.
//* It directs data between devices within a local network and the internet.

//? 2. Data Handling by the Router
//* The router receives data packets and determines whether they belong to its connected network.
//* It **forwards** relevant data to local devices and **filters out** unrelated data.

//? 3. Router vs. Modem
//* The **modem** connects your home network to your ISP and handles internet access.
//* The **router** manages data traffic within the local network and ensures correct device communication.

//? 4. Importance of a Router
//* Provides security by blocking unauthorized access.
//* Supports multiple devices through wired or wireless connections.
//* Improves network efficiency by directing traffic intelligently.
//^================================================================================================

//~ home router:
//* multifunctional device: modem + router + switch

//^================================================================================================
//~ Hub:

//* hub: it is rare to use now
//* hub: creates internal network among number of devices
//* hub: receives signal from router, it distributes it over all devices in the local network
//^================================================================================================

//~ Switch:
//* switch is smarter than hub
//* It receives signal from router and sends data to the port of recipient device only using physical address
//* every connected device to switch has physical address
//^================================================================================================

//~ Network Interface Card (NIC)
//* NIC: any PC has NIC to connect with internet

//^================================================================================================

//~ Repeater:
//* Strengthen the signal in network cable
//* it is rare to use in home
//^================================================================================================

//& OSI Model:

//* OSI standardizes networking functions into seven layers.
//*  It organizes how data moves from one device to another across a network

//* OSI has standard
//* OSI exists in every device (pc, mobile, server)

//* OSI layers are logical layers not physical
//* OSI layers are functions
//* function is a software or a hardware or even a firmware

//* a hardware or a software can do multiple functions in different OSI layers

//* Supports protocol standardization so different systems can communicate.
//* Organizes communication into layers, preventing dependency on a single technology.

//^ Example:

//^ open a website
//* Website (client / user agent) request passes through the seven OSI layers

//* to send request by browser, we use protocols (HTTP/HTTPS)
//* These protocols are the application layer

//* http request is prepared by two OSI layers
//* Application layer (HTTP) and presentation layer (HTTP + TLS = HTTPS)
//* HTTP has no connection
//* socket starts the connection

//? application layer === HTTP, DNS
//* protocols are the application layer
//* application here is not the GUI program, they are the protocols (HTTP/HTTPS)

//* request to be sent after resolving the host name (get the ip associated with domain)
//* host name must be converted to IP (IP Host)
//* this is done by domain name server (DNS)

//^ this flow happens to get the ip of the hostname
//* DNS recursor => Root nameserver => TLD nameserver => Authoritative nameserver

//* Every company provides hosting for websites or domains,
//* have database of DNS records that relates every domain to its IP address

//* DNS: Domain name server
//* TLD: top domain server

//? presentation layer === TLS
//* TLS (formerly ssl) encrypt the http request (except the IP not encrypted)
///* presentation here means the form of the data
//* json or xml is a part of presentation layer

//* HTTP + TLS === HTTPS

//? Session Layer  === Network Socket
//^ next stage:
//* asking OS for opening Network socket (BSD UNIX Socket)
//* socket is an object collects data of connection (ex. the ports used in the connection)
//* socket defines the port to connect with it on the server
//* socket is the start of real connection

//? Transport Layer:  === TCP
//* TCP is the first protocol to transport or move the data

//* TCP: Protocol, it is binary protocol
//* TCP adds TCP header to HTTP Data (TCP Segment)

//* TCP is binary protocol
//* HTTP is a text based protocol (key, value)

//* TCP contains:
//* source port - destination port - sequence number - acknowledgment Number....
//* sequence number: data divides into parts
//* first protocol to divide the data by sequence number
//* to guarantee the data to be sent in correct order

//* acknowledgment number assures that server received the sent sequence data

//* TCP is the first protocol to divide the data (HTTP Data Chunk) by sequence number
//* so TCP guarantee data sent in its correct order after division

//* Max size of TCP segment is 64 KB
//* the default is 4 KB

//? Network Layer:  === IP (internet protocol)

//* Next protocol received TCP is the IP
//* IP add to the request IP Header
//* so the request now contains [ IP Header + TCP Header + HTTP Data ] (IP Packet)

//* IP header is binary too

//* IP Header contains source address(ip) and destination address(ip)

//? Data Link:  === Ethernet + ARP
//* Ethernet

//* Ethernet adds Ethernet Header and Ethernet Footer to Data (Ethernet Frame)
//* Ethernet Frame is in binary form
//* Ethernet relates to physical address

//* Ethernet Header contains unique MAC address (MAC address of your router) printed in NIC :Network Interface Card (NIC)

//* MAC address is physical address can't be mutated , but IP is logical address can be mutated

//* Data after data link layer, will be labelled by MAC address of your router (gateway)

//* Your device will send data to the router after knowing MAC address of the router by ARP protocol
//* Your device sends ARP request

//~ ARP:
//* ARP: address resolution protocol
//* ARP is binary form too

//* ARP protocol between Router and the device (ex. laptop) revise the video

//* Router responds to device by ARP reply

//* MAC revise the video

//^ look up slide 12.jpg

//? Physical Layer:

//* its main function: data transport physical mean or media

//* physical mean such as: copper cable, optical cable, radio wave
//* move the data in cables as electricity signals

//^==============
//* when data arrives to the server, it will pass through layers but in reverse
//* starting by physical layer, ends to application layer

//*=========================

//* software developer needs to study the first layer (http layer) very well
//* software developer needs to know very well the application layer, presentation layer, and few of session layer

//* Devops needs to be acquainted of TCP (transport layer) and IP (network layer)
//* and few of application layer (http)

//* network engineer: from physical layer to transport layer

//*==========================================================================
//& Title: What is Vim?
//
//? Explanation:
//* Vim is a highly configurable text editor developed for efficient text editing.
//* It is an improved version of the classic Unix editor called "vi" (hence the "Vim" stands for "Vi IMproved").
//* Unlike typical text editors, Vim is "modal," meaning it has different modes:
//*   - Normal Mode: For navigating and executing commands.
//*   - Insert Mode: For entering and editing text.
//*   - Visual Mode: For selecting blocks of text.
//* This mode-based design lets you perform complex text manipulations quickly using just the keyboard.
//* Vim is especially popular among developers, system administrators, and power users who appreciate its speed,
//* extensibility, and the ability to work entirely without a mouse.
//
//? Fun Fact:
//* Vim has a reputation for having a steep learning curve, but many swear by its efficiency once mastered. 😂
console.log(
  "Vim is a powerful, modal text editor designed for speed and efficiency!"
);
