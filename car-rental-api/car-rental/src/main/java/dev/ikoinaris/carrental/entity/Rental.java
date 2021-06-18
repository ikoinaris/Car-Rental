package dev.ikoinaris.carrental.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rental")
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @Column(name = "pickUDate")
    private Date pickUDate;

    @Column(name = "checkOutDate")
    private Date checkOutDate;

    @Column(name = "pickUpLocation")
    private String pickUpLocation;

    @Column(name = "dropOffLocation")
    private String dropOffLocation;

    @OneToMany(mappedBy = "rental")
    private List<Extra> extras;
    
}
