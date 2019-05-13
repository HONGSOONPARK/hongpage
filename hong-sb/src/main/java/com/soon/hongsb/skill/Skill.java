package com.soon.hongsb.skill;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "skill")
public class Skill {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    @Column
    private String skillName;
    @Column
    private String skillId;
    @Column
    private String percentage;
    @Column
    private String introduce;
    @Column
    private String detail;
    @Column
    private int orderNo;

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public String getSkillId() {
        return skillId;
    }

    public void setSkillId(String skillId) {
        this.skillId = skillId;
    }

    public String getPercentage() {
        return percentage;
    }

    public void setPercentage(String percentage) {
        this.percentage = percentage;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public int getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(int orderNo) {
        this.orderNo = orderNo;
    }
}
