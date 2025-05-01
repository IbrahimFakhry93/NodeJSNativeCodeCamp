//* OSI: open system interconnection

//* modem connects you with internet
//* modem recieves the signal

//* router: gate network

//* hub: recieves signal from router, it distrubtes it over all devices

//* switch: send data to the recipent device only using physical address
//* every device has physical address

//* NIC: any PC has NIC to connect with internet

//* home router:
//* multofunctional device: modem + router + sitch

//* OSI operates in every device (pc, mobile, server)

//* OSI layer are logical layers not physcial
//* OSI layers are functions
//* function is a software or a hardware or even a firmware

//* a hardware or a software can do mulitple functionsi ndifferent OSI layers

//^ open a webssite
//*  webiste request pass through the seven OSI layers

//* http request is prepared by two OSI layers
//* Application layer and presentation layer
//* hhtp has no connection
//* socket starts the connection

//? application layer  === HTTP, DNS
//* protocols are the application layer
//* application is not the gui, they are the protocols

//* request to be sent after resolve host name (get the ip associated with domanin)

//^ this flow happens to get the ip of the hostname
//* DNS recursor => Root nameserver => TLD nameserver => Authoritative nameserver

//* DNS: Domain name server
//* TLD: top domain server

//? presentation layer === TLS
//* TLS (formerly ssl) encrypt the http request
///* presentation here means the form of the data
//* json is apart of presentation layer

//? Session Layer  === Network Socket
//* next stage:

//* asking OS for creatig Network socket (BSD UNIX Socket)
//* socket is an object collects data of connection (the port used in the connection)
//* define it the port to connect with on the server
//* socket is the start of real connection

//? Transport Layer:  === TCP
//* first protocol to transport the data

//* TCP: Protocol, it is binary protocol
//* Add TCP header to HTTP Data (TCP Segment)

//* TCP is binary protocol
//* HTTP is a text based protocol (key, value)

//* TCP contains:
//* source port - destination port - sequence number - acknowledgment Number....
//* acknowledgment number assures that server received the sent sequence data

//* TCP is the first protocol to divide the data by sequence number
//* so TCP guarantee data sent in its correct order after division

//* Max size of TCP segment is 64 KB
//* the default is 4 KB

//? Network Layer:  === IP (internet protocol)

//* Next protocol received TCP is the IP
//* IP add to the request IP hEADER
//* so the request now contain IP Header + TCP Header + HTTP Data (IP Packet)

//* IP header is binary too

//* IP Header contains source address(ip) and destination address(ip)

//? Data Link:  === Ethernet + ARP
//* Ethernet

//* Ethernet adds Ethernet Header and Ethernet Footer to Data (Ethernet Frame)
//* Ethernet Frame is i binary form
//*  Ethernet Header contains unique MAC address exists in NIC
//* Ethernet relates to physical address

//* Data after data link layer, will be labelled by MAC address of your router (gateway)

//* ARP protocol between Router and the device (ex. laptop) revise the video
//* Router responds to device by ARP reply

//* MAC revise the video
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
